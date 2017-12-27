const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getHtmlPlugin = entry => {
    return new HtmlWebpackPlugin({
        filename: `../views/${entry}.ejs`,
        template: `./pages/${entry}/index.tpl.ejs`,
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency',
        excludeAssets: [
            new RegExp(`/(js|css)/(?!(${entry}|vendor|manifest)).*\\.(js|css)$`)
        ]
    })
}

const getComponentPlugin = entry => {
    return new HtmlWebpackPlugin({
        filename: `../views/components/${entry}.ejs`,
        template: `./components/${entry}/index.tpl.ejs`,
        inject: 'none',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        excludeAssets: [
            new RegExp(`.(js|css)$`)
        ]
    })
}

const getLayoutPlugin = entry => {
    return new HtmlWebpackPlugin({
        filename: `../views/components/${entry}.ejs`,
        template: `./components/${entry}/index.tpl.ejs`,
        favicon: path.resolve(__dirname, '../asset/common/images/favicon.ico'),
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        excludeAssets: [
            new RegExp(`.(js|css)$`)
        ]
    })
}

module.exports = [
    getLayoutPlugin('layout'),
    getComponentPlugin('header'),
    getComponentPlugin('footer'),
    getHtmlPlugin('register'),
    getHtmlPlugin('login'),
    getHtmlPlugin('home')
]
