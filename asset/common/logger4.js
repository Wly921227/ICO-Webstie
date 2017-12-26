import log4js from 'log4js'

const filename = './logs/ico.log'

if (process.env.NODE_ENV === 'production') {
    log4js.configure({
        appenders: {
            prod: {
                type: 'dateFile',
                filename: filename,
                pattern: '-yyyy-MM-dd',
                category: 'normal'
            }
        },
        categories: {
            default: {
                appenders: ['prod'],
                level: 'info'
            }
        },
        replaceConsole: true
    })
} else {
    log4js.configure({
        appenders: {
            dev: {
                type: 'console',
                category: 'normal'
            }
        },
        categories: {
            default: {
                appenders: ['dev'],
                level: 'debug'
            }
        },
        replaceConsole: true
    })
}

export default log4js

export function logger (name) {
    return log4js.getLogger(name || 'normal')
}