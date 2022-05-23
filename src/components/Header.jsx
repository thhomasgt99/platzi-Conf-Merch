import React, { useContext } from 'react'
import { Link } from 'react-router-dom' //link hace lo mismo que <a href='/checkout'>, pero con funcionalides extra que podriamos no No necesitar
import AppContext from '../context/AppContext'
import '../styles/components/Header.css'

const Header = () => {
	const {state} = useContext(AppContext)//esto es destructuracion
	const { cart } = state //denuevo destructuramos pero esta vez de state

	return (
		<div className='Header'>
			<h1 className='Header-title'>
				<Link to='/'>
					PlatziConf Merch
				</Link>
			</h1>
			<div className='Header-checkout'>
				<Link to='/checkout'>
					<i className='fas fa-shopping-basket'/>
				</Link>
				{cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
			</div>
		</div>
	)
}

export default Header