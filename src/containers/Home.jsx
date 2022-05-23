import React from 'react'
import { Helmet } from 'react-helmet'
import Products from '../components/Products'

const Home = () => {
	return (
		<React.Fragment>
			<Helmet>
				<title>Platzi Conf Merch - Pruductos</title>
				<meta name="twitter:card" content="summary_large_image" />{/*para añadir formato cuando se conparte el sitio en twiter*/}
				<meta name="twitter:site" content="@TU_USER" />{/**/}
				<meta name="twitter:creator" content="@TU_USER" />{/**/}
				<meta name="twitter:title" content="Platzi Conf Store" />{/**/}
				<meta name="twitter:description" content="Platzi Conf Store" />{/**/}
				<meta
					name="twitter:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:title" content="Platzi Conf Store" /> {/*para añadir formato cuando se conparte el sitio en facebook*/}
				<meta property="og:description" content="Platzi Conf Store" />
				<meta
					property="og:image"
					content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
				/>
				<meta property="og:url" content="platzistore.xyz" />
				<meta property="og:site_name" content="Platzi Conf Store" />
				<meta property="og:locale" content="es_ES" />
				<meta property="og:type" content="article" />
				<meta property="fb:app_id" content="ID_APP_FACEBOOK" />
			</Helmet>
			<Products />
		</React.Fragment>
	)
}

export default Home