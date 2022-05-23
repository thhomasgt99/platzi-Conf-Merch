import React, { useRef, useContext } from 'react'
import { Link, useNavigate  } from 'react-router-dom' //link hace lo mismo que <a href='/checkout'>, pero con funcionalides extra que podriamos no No necesitar
import AppContext from '../context/AppContext'
import '../styles/components/Information.css'

const Information = () => {
	const { state, addToBuyer } = useContext(AppContext)
	const { cart } = state
	const navigate = useNavigate()
	const form = useRef(null)//para manejar referencia a los formularios

	const handleSubmit = () => { //recojera todos los inputs
		const formData = new FormData(form.current)//en este momento es cuando ejecutan al useRef form
		const buyer = { //este objeto solo es para destructurar los elementos en esta forma para consumirlo en el frontend, si fuera a un backend no seria necesario el objeto ya estaria en form.current
			'name': formData.get('name'),
			'email': formData.get('email'),
			'address': formData.get('address'),
			'apto': formData.get('apto'),
			'city': formData.get('city'),
			'country': formData.get('country'),
			'state': formData.get('state'),
			'cp': formData.get('cp'),
			'phone': formData.get('phone'),
		}
		addToBuyer(buyer)//el paquete de datos se pasan a esta funcion
		navigate('/checkout/payment')
		// history.push('/checkout/payment')
	}

	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Information-head</h2>
				</div>
				<div className="Information-form">
					<form ref={form}> {/*ref se conta con la variable form que tiene ese hook de ref*/}
						<input type="text" placeholder='Nombre completo' name='name' />
						<input type="text" placeholder='Correo Electronico' name='email' />
						<input type="text" placeholder='Direccion' name='address' />
						<input type="text" placeholder='Apto' name='apto' />
						<input type="text" placeholder='Ciudad' name='city' />
						<input type="text" placeholder='Pais' name='country' />
						<input type="text" placeholder='Estado' name='state' />
						<input type="text" placeholder='Codigo postal' name='cp' />
						<input type="text" placeholder='Telefono' name='phone' />
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to='/checkout'>
							Regresar
						</Link>
					</div>
					<div className="Information-next">
						<button type='button' onClick={handleSubmit}>Pagar</button>
					</div>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				{cart.map((item) => (
					<div className="Information-item" key={item.title}>
						<div className="Information-element">
							<h4>{item.title}</h4>
							<span>${item.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Information