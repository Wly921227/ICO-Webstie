const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

function getExternals () {
    return fs.readdirSync(path.resolve(__dirname, '../node_modules')).
        filter(filename => !filename.includes('.bin')).
        reduce((externals, filename) => {
            externals[filename] = `commonjs ${filename}`

            return externals
        }, {})
}

const config = {
    context: path.resolve(__dirname, `../asset`),
    entry: {
        server: './server/server.prod'
    },
    output: {
        path: path.resolve(__dirname, `../dist/ico/server`),
        filename: '[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: '/ico/'
    },
    target: 'node',
    node: {
        __filename: true,
        __dirname: true,
        console: true,
        global: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        'add-module-exports'
                    ],
                    cacheDirectory: true
                }
            },
            {
                test: /\.less$/,
                loader: 'css!less'
            },
            {
                test: /\.css/,
                loader: 'css'
            },
            {
                test: /\.(jpg|jpeg|png|gif|webp)$/,
                loader: 'url?limit=8192&name=images/[name].[hash:8].[ext]'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    externals: getExternals(),
    resolve: {extensions: ['', '.js', '.json', '.less']},
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false
        }),
        new webpack.DefinePlugin(
            {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)})
    ]
}

module.exports = config