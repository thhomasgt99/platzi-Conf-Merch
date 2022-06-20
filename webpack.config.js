const path = require('path'); //alparecer require es un metodo de node para traer a path
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: './' //porque ruta arranca
  },
  resolve: {
    extensions: ['.js', '.jsx'], //extenciones a tratar
  },
  module: {
    //configuraciones de algunos modulos
    rules: [
      // las regla trataran cosas como los archivos js moderno, htmls, images, css,   a traves de loaders y que webpack sepa que hacer con esos recursos
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //ignora estas extenciones dentro
        use: {
          loader: 'babel-loader', //esta configuracion le dira a webpack que loader utilizar para hacer el tratado de estas extenciones y esta configuracion
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //loader que llega de este paquete
          },
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //loader que llega de este paquete
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css', //esto pone la regla, al compilar creara un carpeta llamada assets y dentro el css con el nombre por defecto alparecer
    }),
    new CopyPlugin({
      patterns: [
        { from: 'public/manifest.json', to: '' },
        { from: 'public/service-worker.js', to: '' },
        { from: 'public/icon.png', to: 'assets' },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true, //comprimir
    historyApiFallback: true, //permite acceder a las rutas por la url arparecer
    port: 3005,
    open: true,
  },
};
