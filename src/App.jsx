import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			monsters: [],
			monstersToShow: [],
		}
	}

	componentDidMount() {
		const apiUrl = 'http://jsonplaceholder.typicode.com/users'
		fetch(apiUrl)
			.then((response) => response.json())
			.then((monsters) =>
				this.setState(
					() => {
						return { monsters: monsters, monstersToShow: monsters }
					},
					() => {
						console.log(this.state)
					}
				)
			)
	}

	searchMonsters(search) {
		if (search) {
			const searchResult = this.state.monsters.filter((monster) =>
				monster.name.toLowerCase().includes(search.toLowerCase())
			)

			this.setState({ monstersToShow: searchResult })
		} else {
			this.setState({ monstersToShow: [...this.state.monsters] })
		}
	}

	render() {
		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="search monsters"
					onChange={ event =>	this.searchMonsters(event.target.value) }
				/>
				{this.state.monstersToShow.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					)
				})}
			</div>
		)
	}
}

export default App
