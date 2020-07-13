'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const path = require('path')

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		watchOptions: {
			poll: true
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				enforce: 'pre'
			},
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	resolve: {
		alias: {
			vue$: 'vue/dist/vue.runtime.esm.js'
		}
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: resolve('static/img'),
					to: resolve('dist/static/img'),
					toType: 'dir'
				}
			]
		})
	]
}
