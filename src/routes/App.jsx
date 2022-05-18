import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'

const App = () => {
	return (
		<BrowserRouter>
			<Layout> {/*Layout tiene declarado children, <Routes> toma entra en ese chlidren|solo por el hecho de declar un children con esa palabra magicamente reconoce que le llegara un componente*/}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/checkout/information' element={<Information />} />
					<Route path='/checkout/payment' element={<Payment />} />
					<Route path='/checkout/success' element={<Success />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}

export default App