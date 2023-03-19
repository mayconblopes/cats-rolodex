import { Component } from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

class CardList extends Component {
	render() {
		const { cats } = this.props
		return (
			<div className='card-list'>
				{cats.map((cat) => {
					return (
						<Card key={cat.id} cat={cat}/>
					)
				})}
			</div>
		)
	}
}

export default CardList
