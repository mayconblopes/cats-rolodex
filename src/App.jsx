import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useEffect, useState } from 'react'

function App() {
	const [cats, setCats] = useState([])
	const [searchField, setSearchField] = useState('')

	useEffect(() => {
		const apiUrl = 'http://jsonplaceholder.typicode.com/users'
		fetch(apiUrl)
			.then((response) => response.json())
			.then(cats => setCats(cats) )
				
	}, []) 


	function onSearchChange(event) {
		const search = event.target.value.toLowerCase()
		setSearchField(search)
	}

	const filteredCats = cats.filter((cat) => {
		return cat.name.toLowerCase().includes(searchField)
	})

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
