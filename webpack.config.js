const path = require("path");

/**
 * Webpack Plugins
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "./src/app/app.module.js")
	},

	output: {
		filename: "js/[name]-[hash].bundle.js",
		path: path.resolve(__dirname, "./dist")
	},

	optimization: {
		splitChunks: {
			filename: "js/vendor-[hash].bundle.js",
			chunks: "all"
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: "AngularJS &amp; ES6 Starter Tooling",
			template: path.resolve(__dirname, "./src/index.html")
		})
	],
};
