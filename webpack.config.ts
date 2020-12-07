import HtmlWebacpkPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

interface Configuration extends webpack.Configuration {
  devServer?: webpackDevServer.Configuration
}

const configuration: Configuration = {
  entry: path.resolve( 'src', 'index.webpack.tsx' ),
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [ 'babel-loader', 'ts-loader' ],
        exclude: [ path.resolve( 'node_modules' ) ]
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebacpkPlugin( {
      template: path.resolve( 'src', 'index.webpack.pug' )
    } ) 
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.json', '.js', '.jsx' ]
  }
}

export default configuration
