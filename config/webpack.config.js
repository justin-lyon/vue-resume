const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_LIBS = [
	"vue",
	"vue-router",
	"vuelidate",
	"vuetify",
	"vuex"
];

module.exports = {
	entry: {
		bundle: '@/main.js',
		vendor: VENDOR_LIBS
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true,
					loaders: {}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "buble-loader",
				}
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]'
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("assets/css/style.css"),
		new webpack.optimize.CommonsChunkPlugin({
			names: ["vendor", "manifest"]
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
			favicon: "favicon.ico"
		})
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': path.resolve(__dirname, "..", "src")
		},
		extensions: ['*', '.js', '.vue', '.json']
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
};