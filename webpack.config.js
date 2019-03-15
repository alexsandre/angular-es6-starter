const path = require("path");

/**
 * Webpack Plugins
 */
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "./src/app.module.js")
	},

	output: {
		filename: "js/[name]-[hash].bundle.js",
		chunkFilename: "js/[name]-[hash].bundle.js",
		path: path.resolve(__dirname, "./dist"),
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/].*\.js$/i,
					name: "vendor",
					chunks: "all"
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},

			{
				test: /\.js$/i,
				exclude: /node_modules/i,
				loader: "babel-loader"
			}
		]
	},

	plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve(__dirname, "./src/images/"),
				to: path.resolve(__dirname, "./dist/images/")
			}
		]),

		new ExtractTextPlugin(
			"css/app.bundle.css"
		),

		new HtmlWebpackPlugin({
			favicon: path.resolve(__dirname, "./src/favicon.ico"),
			title: "AngularJS &amp; ES6 Starter Tooling",
			template: path.resolve(__dirname, "./src/index.html")
		})
	],
};
