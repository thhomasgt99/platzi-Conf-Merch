import React from 'react'
import initialState from '../initialState'
import Products from '../components/Products'

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Products products={initialState.products} />
		</div>
	)
}

export default Home