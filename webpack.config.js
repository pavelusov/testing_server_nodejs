const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "javascripts/main.js",
        publicPath: "dev/"
    },
    devServer: {
        port: 3001
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "stylesheets/front/front-styles.less"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    return conf;
};
