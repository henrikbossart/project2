var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    context: path.join(__dirname),
    entry: "./Scripts/home.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './Html', to: 'html'},
            {from: './CSS', to: 'css'},
            {from: './Image', to: 'image'}
        ],
            {
                copyUnmodified: true
            })
    ]
};