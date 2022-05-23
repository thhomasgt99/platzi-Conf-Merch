import { useState } from 'react'
import initialState from '../initialState'

const useIntialState = () => {
	const [state, setState] = useState(initialState)

	const addToCart = payload => { //payload = carga util
		setState({
			...state,
			cart: [...state.cart, payload]
		})
	}

	const removeFromCart = payload => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id != payload.id) //elimina dejando los items que sean diferentes al argumento
		})
	}

	const addToBuyer = payload => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
		})
	}

	const addNewOrder = payload => {
		setState({
			...state,
			orders:[...state.orders, payload]
		})
	}

	return {
		addToCart,
		removeFromCart,
		state,
		addToBuyer
	}
}

export default useIntialState


