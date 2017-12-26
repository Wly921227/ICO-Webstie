require('shelljs/global')
env.NODE_ENV = 'production'

const ora = require('ora')
const path = require('path')
const webpack = require('webpack')

const clientConfig = require('../config/webpack.client')
const serverConfig = require('../config/webpack.server')

const config = [clientConfig, serverConfig]

const spinner = ora(`building for production...`)
spinner.start()

const assetsPath = path.join(__dirname, `../dist`)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

webpack(config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})
