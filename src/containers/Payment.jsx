import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { PayPalButton } from 'react-paypal-button-v2'
import { useNavigate  } from 'react-router-dom'
import '../styles/components/Payment.css'

const Payment = () => { 
	const { state, addNewOrder } = useContext(AppContext)
	const { cart, buyer } = state
	const navigate = useNavigate()

	const paypalOptions = { //aqui va el clienID que identifica que esta ligado a nuestra cuenta y otras configuraciones generales
		clientId: 'AYTxbpKhmfd6tYmXkdXqCHzyb6J57OELMSOhKCbLVSg68AGW4RBJljM5cDAEczp5eHQ01c4i1qNFQlnI', //cliente id
		intent:	'capture',
		currency: 'USD', //moneda en la que se cobra
	}

	const buttonStyles = { //configuraciones de los botones de como se va a presentar
		layout: 'vertical',
		shape: 'rect'
	}

	const handlePaymentSuccess = (data)=> {//para ver un error o cuando el pago sucedio
		console.log(data) //esto solo es para ver la info del comprador capturado de los inputs
		if(data.status === 'COMPLETED'){ //CONPLETED es simplemente  algo que devuelve paypal si la transaccion fue exitosa y tendriamos los datos de compra del comprador
			const newOrder = {
				buyer, //traemos los datos del comprador, estos ya los abimos recogido por el form
				product: cart, //productos comprados o que le quedaron el el carrito
				payment: data //la info completa que llega por parte de paypal del pago
			}
			addNewOrder(newOrder) //esta funcion simula lo que ariamos en ultimas con la info,como guardarla en un backend 
			navigate('/checkout/success')
		}
	}

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = cart.reduce(reducer, 0)//reduce biene de js| el '0' indica si enpezar en ceros,reduce ira tomando a reducer una y otra vez hasta acabar de reducir
		return sum
	}

	return (
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resument del pedido:</h3>
				{cart.map((item)=>(
					<div className='Payment-item' key={item.title}>
						<div className='Payment-element'>
							<h4>{item.title}</h4>
							<span>$ {item.price}</span>
						</div>
					</div>
				))}
				<div className="Payment-button">
					<PayPalButton 
						paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
					/>
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default Payment