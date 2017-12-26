const getConfig = require('../config')
getConfig()
const fs = require('fs')
const path = require('path')
const app = require('./app')
// React page
const webpack = require('webpack')
const devMiddleware = require('webpack-dev-middleware')
const hotMiddleware = require('webpack-hot-middleware')
const config = require('../../config/webpack.client')

const compiler = webpack(config)

compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets
    let file, data

    Object.keys(assets).forEach(key => {
        if (key.match(/\.ejs/)) {
            file = path.resolve(__dirname, key)
            const arr = file.split('/')
            arr.pop()
            const dir = arr.join('/')
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir)
            }
            data = assets[key].source()
            fs.writeFileSync(file, data)
        }
    })
    callback()
})

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'ejs')

// server route
app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        chunks: false,
        hash: false,
        colors: true
    }
}))
app.use(hotMiddleware(compiler))

const port = 3000
global.port = port

module.exports = {app, port}
