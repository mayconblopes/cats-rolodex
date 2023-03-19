import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useEffect, useState } from 'react'

function App() {
	const [cats, setCats] = useState([])
	const [searchField, setSearchField] = useState('')
	const [filteredCats, setFilteredCats] = useState(cats)

	// This code defines an effect hook with a callback function that will run after the component is mounted
	useEffect(() => {
		// Defines the URL to fetch API data
		const apiUrl = 'http://jsonplaceholder.typicode.com/users'

		// Fetches the data from the API URL
		fetch(apiUrl)
			// Converts the returned response to JSON format
			.then((response) => response.json())

			// Updates state with the fetched and parsed data
			.then((cats) => setCats(cats))
	}, []) // the empty array as a second argument tells React to only execute this effect on first mount.

	// This code defines another effect hook which filters cats based on searchField.
	useEffect(() => {
		// Filters the list of cats by the value of `searchField`
		const filter = cats.filter((cat) => {
			return cat.name.toLowerCase().includes(searchField)
		})

		// updates the filteredCats state with the updated array of cats
		setFilteredCats(filter)
	}, [searchField, cats]) // The `searchField` and `cats` properties are dependencies used to trigger this effect. Whenever either one changes, the effect runs again performing the filtering logic.

	function onSearchChange(event) {
		const search = event.target.value.toLowerCase()
		setSearchField(search)
	}

	return (
		<div className="App">
			<h1 className="app-title"> Cute Cats </h1>
			<SearchBox
				className="cats-search-box"
				onChangeHandler={onSearchChange}
				placeholder="search cats"
			/>
			<CardList cats={filteredCats} />
		</div>
	)
}

export default App
