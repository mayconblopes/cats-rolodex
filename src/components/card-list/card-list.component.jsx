import './card-list.styles.css'
import Card from '../card/card.component'

function CardList({ cats }) {
	return (
		<div className="card-list">
			{cats.map((cat) => {
				return <Card key={cat.id} cat={cat} />
			})}
		</div>
	)
}

export default CardList
