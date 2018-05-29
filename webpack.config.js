const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        vendor: [
            'jquery',
        ],
        app: './src/app-front-end.js'
    },
    output: {
        path: `${__dirname}/website/static/js/build/`,
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery',
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new ExtractTextPlugin("styles.css")
    ],
    devServer: {
        host: "0.0.0.0",
        port: 3002,
        headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            "Pragma": "no-cache",
            "Expires": "0s"
        },
        disableHostCheck: true
    }
};
