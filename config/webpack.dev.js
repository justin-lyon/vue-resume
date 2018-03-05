const path = require('path');
const merge = require("webpack-merge");

const base = require("./webpack.config");

module.exports = merge(base, {

	output: {
		path: path.resolve(__dirname, "..", 'dist'),
		filename: 'assets/js/[name].[hash].js'
	}
})
