const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require(
    'html-webpack-exclude-assets-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const _ = require('lodash')
const loaders = require('./loaders')
const plugins = require('./html.plugins')

const getDevEntry = src => ([
    src,
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000'
])

let config = {
    context: path.resolve(__dirname, `../asset`),
    entry: {
        vendor: [
            'jquery'
        ],
        auth: getDevEntry('./pages/auth'),
        home: getDevEntry('./pages/home'),
        faq: getDevEntry('./pages/faq')
    },
    output: {
        path: path.resolve(__dirname, '../static/public'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].[hash:8].js',
        publicPath: '/ico/'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.less']
    },
    module: {loaders},
    plugins: [
        new CopyWebpackPlugin([
            {from: '../package.json', to: '../'},
            {from: '../README.md', to: '../'}
        ]),
        new CopyWebpackPlugin([
            {
                from: './config/config.json',
                to: '../config/config.json'
            }]),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            names: ['manifest', 'vendor']
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            comments: false
        }),
        new webpack.DefinePlugin(
            {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)}),
        new HtmlWebpackExcludeAssetsPlugin(),
        new ProgressBarPlugin({summary: false})
    ].concat(plugins)
}

if (process.env.NODE_ENV === 'production') {
    config = _.assign(config, {
        entry: {
            vendor: [
                'jquery'
            ],
            auth: ('./pages/auth'),
            home: ('./pages/home'),
            faq: ('./pages/faq')
        },
        output: {
            path: path.resolve(__dirname, `../dist/ico/public`),
            filename: 'js/[name].[hash:8].js',
            chunkFilename: 'js/[name].[hash:8].js',
            publicPath: '/ico/'
        }
    })
    config.plugins = config.plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new ExtractTextPlugin('css/[name].[hash:8].css', {allChunks: true})
    ])
} else {
    config = _.assign(config, {
        devtool: 'source-map'
    })
    config.plugins = config.plugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ])
}

module.exports = config