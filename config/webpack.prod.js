const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");

const base = require("./webpack.config");

module.exports = merge(base, {
	output: {
		path: path.resolve(__dirname, "..", "dist"),
		filename: 'assets/js/[name].js'
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
	]
});
