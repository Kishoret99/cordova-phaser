const path = require('path');
const srcPath = './src/games/snake/';
const phaser = path.join(__dirname, 'node_modules/phaser/dist/phaser.min.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const outDir = 'www'
module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: srcPath + 'game.ts',
    output: {
        path: path.resolve(__dirname, outDir, 'build'),
        filename: "main.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            phaser: phaser
        }
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: '/node_modules/'
            },
            {
                test: /phaser\.js$/, 
                loader: 'expose-loader?Phaser'
            }
        ]
    },
    // watch: false,
    // watchOptions: {
    //     aggregateTimeout: 1000
    // },
    devServer: {
        contentBase: path.resolve(__dirname, 'www'),
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.join(srcPath + 'index.html'),
                to: path.resolve(__dirname, outDir)
            },
            {
                from:  path.join(srcPath + 'assets'),
                to: path.resolve(__dirname, outDir),
            }
        ])
    ]
};