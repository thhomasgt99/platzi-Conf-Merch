import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'

function Map({data}) {

	const MapStyles = { //estilos del mapa
		height: "50vh",
		with: "100%"
	} 

	const defaultCenter = {
		lat: data.lat,
		lng:  data.lng
	}

	return (
		<LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
			<GoogleMap 
				// MapStyle={MapStyles}
				mapContainerStyle={MapStyles}
				zoom={17} //este curiosamente se puede pasar en numeros
				center={defaultCenter}	
			>
				<Marker position={defaultCenter}/>
			</GoogleMap>
		</LoadScript>
	)
}

export default Map