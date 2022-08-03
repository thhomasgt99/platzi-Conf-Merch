# `Platzi-Conf-Merch`
---

### `Descripción`
- Platzi-Conf-Merch es una e-commerce donde puedes vender tus productos.
- Contiene integración de pagos con Paypal.
- Diseño responsivo.
---

### `Tecnologías principales`
- HTML
- CSS
- SASS
- JavaScript
- React
- WebPack
- NodeJS
- Babel
- Firebase(para el despliegue de la aplicación)
---

### `Scripts`
- start: arranca el servidor de desarrollo.
- build: compila el proyecto para ser enviado a producción
---
### `URL`
- [Platzi-Conf-Merch](thomb.xyz)
---

### `Dependencias`
- react: Instala React.
- react-dom: Instala react-dom.
- react-router-dom: Dependencia para manejo de rutas en la aplicación.
- webpack: Instala wepack.
- webpack-cli: Instala webpack-cli.
- webpack-dev-server: Servidor de desarrollo.
- html-webpack-plugin: Para poder manipular el html desde webpack, modificarlo y moverlo a dist.
- html-loader: Loader de html para que trate webpack estos formatos.
- babel-loader: Para poder trabajar babel con webpack.
- @babel/preset-env: Compila las versiones ecma6 de para adelante.
- @babel/preset-react: Compila	jsx y sintax de React.
- @babel/core: Core de babel.
- @babel/eslint-parser: Una configuración que necesita eslint de babel para entender js moderno.
- css-loader: Loader de css para que trate webpack estos formatos.
- mini-css-extract-: Minifica css. 
- sass: Instala sass (preprocesador de css).
- sass-loader: Loader de sass para que trate webpack estos formatos.
- eslint: Instala eslint (instalación en local).
- eslint: Instala eslint (instalación en global).
- eslint-config-airbnb: Eslint con una configuración de airbnb.
- eslint-plugin-import: Para trabajar con los imports.
- eslint-plugin-jsx-a11y: Para trabajar con accesibilidad.
- eslint-plugin-react: Para trabajar con React, que pueda leer y entender las configuraciones.  
- prettier: Instala Pretttier.
- eslint-plugin-prettier: Prettier para eslint.
- eslint-config-prettier: Prettier configuraciones de eslint.
- react-paypal-button-v2: Botón de envío de datos para pagos en Paypal.
- axios: Para manejar mejor las llamadas a APIs.
- react-helmet: Para configuración de SEO y metadata.
- copy-webpack-plugin: Nos ayudará a copiar los archivos de la carpeta /public a la carpeta de nuestro proyecto compilado.

#### *Nota: Para el deploy solo tenemos que correr (npm run build), enviar los cambios a github y listo.*
#### *Nota: En local la regla (publicPath: '/') debe estar comentada, pero en producción debe enviarse des comentada.*