import './card.styles.css'

function Card({ cat }) {
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${cat.id}?set=set4&size=180x180`}
				alt="cat"
			/>
			<h2>{cat.name}</h2>
			<p>{cat.email}</p>
		</div>
	)
}

export default Card
