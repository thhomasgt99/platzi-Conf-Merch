import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

const Success = () => {
	const {state} = useContext(AppContext)
	const {buyer} = state
	// const location = useGoogleAddress(buyer[0].address) //esto basicamente transforma la direccion del cliente a cooerdenadas
	//descomentar para renderizar el mapa, aunque da error pq no tengo un apikey valida
	return (
		<div className="Success">
			<div className="Success">
				<h2>{`${buyer.name}, Gracias por tu compra`}</h2>
				<span>Tu pedido llegara en 3 dias a tu direccion:</span>
				<div className="Success-map">
					{/* <Map data={location}/> //descomentar para renderizar el mapa, aunque da error pq no tengo un apikey valida*/}
				</div>
			</div>
		</div>
	)
}

export default Success