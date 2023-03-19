import { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
	constructor() {
		super()

		this.state = {
			cats: [],
			searchField: '',
		}
	}

	componentDidMount() {
		const apiUrl = 'http://jsonplaceholder.typicode.com/users'
		fetch(apiUrl)
			.then((response) => response.json())
			.then((cats) =>
				this.setState(
					() => {
						return { cats: cats }
					},
					() => {
						console.log(this.state)
					}
				)
			)
	}

	onSearchChange = (event) => {
		const searchField = event.target.value.toLowerCase()
		this.setState(() => {
			return { searchField }
		})
	}

	render() {
		const { cats, searchField } = this.state
		const { onSearchChange } = this

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
}

export default App
