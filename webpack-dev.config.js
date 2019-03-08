const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
	mode: "development",
	devtool: "cheap-module-source-map",
	devServer: {
		contentBase: path.resolve(__dirname, "./dist"),
		port: 9000
	}
});
