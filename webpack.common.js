const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");
module.exports = {
	entry: {
		app: path.resolve(__dirname, "./src/app/app.module.js")
	},
	output: {
		filename: "js/[name]-[hash].bundle.js",
		path: path.resolve(__dirname, "./dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "AngularJS &amp; ES6 Starter Tooling"
		})
	],
	optimization: {
		splitChunks: {
			filename: "js/vendor-[hash].bundle.js",
			chunks: "all"
		}
	}
};
