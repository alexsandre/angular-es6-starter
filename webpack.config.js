const path = require("path");

/**
 * Webpack Plugins
 */
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
					test: /[\\/]node_modules[\\/].*\.js$/,
					name: "vendor",
					chunks: "all"
				},
			},
		},
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	plugins: [
		new ExtractTextPlugin(
			"css/app.bundle.css"
		),

		new HtmlWebpackPlugin({
			title: "AngularJS &amp; ES6 Starter Tooling",
			template: path.resolve(__dirname, "./src/index.html")
		})
	],
};
