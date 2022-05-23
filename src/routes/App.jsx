import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Success from '../containers/Success'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'
import AppContex from '../context/AppContext'//context pasara un contexto para todos sus hijos en este caso sera el estado useInitilState, asi todos lo consumiran y todos tendran la misma informacion actualizada siempre
import useIntialState from '../hooks/useIntialState'

const App = () => {
	const initialState = useIntialState() //este es el custom hook useInitialState pero ese dentro tiene al archivo initialState original
	return (
		<AppContex.Provider value={initialState}> {/*se pone el .provider pq asi se le indica que es un context y va a ser un componente de envio de digamos'props', value sera lo enviado*/}
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
		</AppContex.Provider>
	)
}

export default App