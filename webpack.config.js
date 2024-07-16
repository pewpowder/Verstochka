const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

require('dotenv').config();

module.exports = () => {
    const isProduction = process.env.NODE_ENV === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'bundle.js',
            clean: true
        },
        devServer: {
            static: path.resolve(__dirname, './src'),
            port: 8080,
        },
        devtool: isProduction ? '' : 'source-map',
        // optimization: {
        //     minimize: isProduction,
        //     minimizer: [
        //         new TerserPlugin(),
        //         new CssMinimizerPlugin()
        //     ]
        // },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/index.html')
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(png|svg)$/,
                    type: 'asset/resource'
                }
            ]
        }
    }
};
