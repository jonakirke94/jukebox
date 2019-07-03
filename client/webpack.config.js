const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
	entry: path.join(path.resolve(__dirname, 'src'), 'index.ts'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
	},
	devServer: {
		open: true,
	},
	resolve: {
		extensions: ['.js', '.ts', '.scss'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js|\.ts$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.vue$/],
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader', // creates style nodes from JS strings
					},
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader', // compiles Sass to CSS
					},
				],
			},
		],
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name(module) {
						const pkgName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
						return `npm.${pkgName.replace('@', '')}`;
					},
				},
			},
		},
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(path.resolve(__dirname, 'src'), 'index.html'),
			inject: true,
		}),
		new webpack.HashedModuleIdsPlugin(),
		new CleanWebpackPlugin(['dist']),
	],
};
