import React, { useContext } from 'react'
import { Link } from 'react-router-dom' //link hace lo mismo que <a href='/checkout'>, pero con funcionalides extra que podriamos no No necesitar
import AppContext from '../context/AppContext'
import '../styles/components/Checkout.css'

const Checkout = () => {
	const { state, removeFromCart } = useContext(AppContext) //consumo del contexto destructurando algunos de sus elementos
	const { cart } = state //destructuracion de state

	const handleRemove = product => () => { //No se pq putas se anidan dos arrow functios pero si no se hace se buguea
		removeFromCart(product)
	}

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = cart.reduce(reducer, 0)//reduce biene de js| el '0' indica si enpezar en ceros,reduce ira tomando a reducer una y otra vez hasta acabar de reducir
		return sum
	}

	return (
		<div className="Checkout">
			<div className="Checkout-content">
				{cart.length > 0 ? <h3>Liste de pedidos</h3> : <h3>Sin pedidos...</h3>} {/*if ternario*/}
				{cart.map((item) => (
					<div className="Checkout-item">
						<div className="Checkout-element">
							<h4>{item.title}</h4>
							<span>{item.price}</span>
						</div>
						<button type='button' onClick={handleRemove(item)}>
							<i className='fas  fa-trash-alt' />
						</button>
					</div>
				))}

			</div>
			{cart.length > 0 && (
				<div className="Checkout-sidebar">
					<h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
					<Link to='/checkout/information'>
						<button type='button'>Continuar pedido</button>
					</Link>
				</div>
			)}

		</div>
	)
}

export default Checkout