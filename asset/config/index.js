const fs = require('fs')
const path = require('path')
const CONFIG_PATH = path.resolve(__dirname, './config.json')
console.log('config path: ' + CONFIG_PATH)

const readConfig = () => {
    return new Promise(resolve => {
        fs.exists(CONFIG_PATH, function (exists) {
            if (exists) {
                fs.readFile(CONFIG_PATH, 'utf8', function (err, data) {
                    if (err) throw new Error(err)
                    resolve(JSON.parse(data))
                })
            } else {
                throw new Error(`config.json 不存在： ${CONFIG_PATH}`)
            }
        })
    })
}

export default async callback => {
    const conf = {}
    if (process.env.NODE_ENV === 'production') {
        const config = await readConfig()
        const isOnline = process.argv.filter(item => item === 'online').length >
            0
        if (isOnline) {
            Object.assign(conf, config.online)
        } else {
            Object.assign(conf, config.offline)
        }
        global.prod = true
    } else {
        const config = require('./config.json')
        Object.assign(conf, config.dev)
        global.dev = true
    }

    if (process.argv.filter(item => item === 'location').length) {
        console.log('=========> location')
        global.location = true
    }

    global.config = conf

    callback && callback()

    return conf
}
