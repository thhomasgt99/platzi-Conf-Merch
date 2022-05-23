import React, {useContext} from 'react' //useContext es para utilizar el contex pero se habra tenido que crear antes
import AppContext from '../context/AppContext' //este si es el contexto como tal|le fue llenado el value que comparte en el archivo App.jsx
import Product from './Product'
import '../styles/components/Products.css'

const Products = () => {
	const {state, addToCart}=	useContext(AppContext) //asi ya estaremos consumiendo el context especificamente el AppContext
	//aqui pareciera que useContext es parecido a un estado, pero en realidad es destructuracion pero curiosamente tiene los nombres demaciado parecidos
	//No trae corchetes de estos[], por eso es destructuracion
	const {products} = state  // traemos products del estado destructurandolo

	const handleAddToCart = product => () => {
    addToCart(product)
  }

	return (
		<div className="Products">
			<div className="Products-items">
				{products.map(product => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
				))}
			</div>
		</div>
	)
}

export default Products