const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getHtmlPlugin = entry => {
    return new HtmlWebpackPlugin({
        filename: `../views/${entry}.ejs`,
        template: `./pages/${entry}/index.tpl.ejs`,
        favicon: path.resolve(__dirname, '../asset/common/images/favicon.ico'),
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

module.exports = [
    getHtmlPlugin('login')
]
