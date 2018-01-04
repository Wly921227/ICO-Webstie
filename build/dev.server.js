// Provide custom regenerator runtime and core-js
require('babel-polyfill')

// Node babel source map support
require('source-map-support').install()

// Javascript require hook
require('babel-register')({
    presets: ['es2015', 'stage-0'],
    plugins: [
        'add-module-exports'
    ]
})

// Css require hook
const lessParser = require('postcss-less').parse
require('css-modules-require-hook')({
    extensions: ['.less'],
    processorOpts: {parser: lessParser}
})
// 忽略less文件，
// const Module = require('module')
// Module._extensions['.less'] = (module, fn) => ''

// Image require hook
require('asset-require-hook')({
    name: '/public/images/[name].[hash:8].[ext]',
    extensions: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
    limit: 8192
})

let {app, port} = require(`../asset/server/server.dev`)
port = port || 3000

console.log(`\n==> Listening on port ${port}. 
Open up http://localhost:${port}/ in your browser.\n`)

app.listen(port)