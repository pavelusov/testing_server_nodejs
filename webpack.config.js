const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

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
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'images/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "stylesheets/front/front-styles.css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],
    resolve: {
        modules: [
            "node_modules"
        ],
        alias: {
            // "jquery-ui": "jquery-ui/jquery-ui.js",
            modules: path.join(__dirname, "node_modules"),
        },
    }
};
module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production ? 'source-map' : 'eval-sourcemap';
    return conf;
};
