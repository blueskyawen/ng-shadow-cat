/**
 * Created by liuxuwen on 18-10-15.
 */
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bootshadow.min.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bootshadow.min.css")
    ]
};*/