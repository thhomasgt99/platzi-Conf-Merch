# Platzi-Conf-Merch
---
## Dependencias de desarrollo
- react            	 			-> Instala react
- react-dom        	 			-> Instala react dom
- react-router-dom        -> Dependencia para manejo de rutas en la aplicacion
- webpack									-> wepack
- webpack-cli        			-> 
- webpack-dev-server 			-> Servidor de desarrollo
- html-webpack-plugin			-> Para poder manipular el html desde webpack, modificarlo y moverlo a dist
- html-loader				 			-> Loader de html para que trate webpack estos formatos
- babel-loader       			-> Para poder trabajar babel con webpack
- @babel/preset-env  		 	-> Compila las versiones ecma6 de para adelante alparecer
- @babel/preset-react		 	-> Compila	jsx y sintax de react
- @babel/core        		 	-> Todo el core de babel
- css-loader         		 	-> Loader de css para que trate webpack estos formatos
- mini-css-extract-plugin	-> Minificador de css 
- sass               		 	-> sass
- sass-loader        		 	-> Loader de sass para que trate webpack estos formatos
- eslint             		 	-> Este si instala en global
- eslint             		 	-> Denuevo eslint pero en local
- @babel/eslint-parser   	-> Una configuracon que nececita eslint de babel para enterder js moderno|No estoy seguro
- eslint-config-airbnb   	-> eslint con una configuracion de airbnb
- eslint-plugin-import   	-> Esto al paracer es para trabajar con los imports
- eslint-plugin-jsx-a11y 	-> Para trabajar con accesibilidad
- eslint-plugin-react    	-> Para trabajar con riact, que pueda leer y enterder las configuraciones   
- prettier               	-> Pretttier
- eslint-plugin-prettier 	-> Prettier para eslint
- eslint-config-prettier 	-> Prettier configuraciones de eslint
- react-paypal-button-v2  -> Obcion de paypal para crear alparece el boton de envio de datos para pagos
###### *alparecer este ultimo plugin tambien sirve para pagar en serio pero hay que configurarlo, tendriamos que leer la documentacion*
- @react-google-maps/api  -> Para integrar google maps al codigo, nececita una APIKey de googleclaud que porcierto es paga y no la tengo.
- axios                   -> Para manejar mejor las llamadas apis
- react-helmet            -> Para configurcion de SEO, metadata
- copy-webpack-plugin     -> Nos ayudará a copiar los archivos de la carpeta /public a la carpeta de nuestro proyecto compilado

##### Para el deploy vamos así: solo tenemos que correr npm run build y despues puashear y listo , tambien no olvidar que la regla para deploy deve estas descomentada '/'