import React, { Children } from 'react'
import Header from './Header'
import Footer from './Footer'
import '../styles/components/Layout.css'

const Layout = ({children}) => { //children indica que va a envever en ese lugar otro componente
	return (
		<div className='Main'>
			<Header></Header>
			{children} {/*solo por el hecho de declar un children con esa palabra magicamente reconoce que le llegara un componente, si fuese otra palabra seria una prop y tendriamos que mandarsela con ese nombre*/}
			<Footer></Footer>
		</div>
	)
}

export default Layout