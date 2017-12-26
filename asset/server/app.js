import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'

import log4js, { logger } from '../common/logger4'

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    app.use(session({
        saveUninitialized: true,
        name: 'ico',
        resave: true,
        secret: 'ico'
    }))
} else {
    // session
    app.use(session({
        saveUninitialized: true,
        name: 'ico',
        resave: true,
        secret: 'ico'
    }))
}

// logger
app.use(log4js.connectLogger(logger('normal'), {
    level: log4js.levels.INFO,
    format: ':method :url'
}))

// post 请求解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 过滤cordova_plugins
app.use((req, res, next) => {
    if (/\/cordova_plugins\.js/.test(req.url)) {
        res.send('')
        res.end()
    } else {
        next()
    }
})

// TODO user login middleware

// routers
import login from '../routers/login'
import register from '../routers/register'
import home from '../routers/home'

app.use('/', login)
app.use('/', register)
app.use('/', home)

module.exports = app