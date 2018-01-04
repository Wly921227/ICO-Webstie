import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'

import log4js, { logger } from '../common/logger4'

const app = express()

if (process.env.NODE_ENV === 'production') {
    app.set('trust proxy', 1)
    app.use(session({
        saveUninitialized: true,
        secret: 'ico',
        resave: true,
        name: 'ico'
    }))
} else {
    // session
    app.use(session({
        saveUninitialized: true,
        secret: 'ico',
        resave: true,
        name: 'ico'
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
import auth from '../routers/auth'
import home from '../routers/home'
import faq from '../routers/faq'

app.use('/', auth)
app.use('/', home)
app.use('/', faq)

module.exports = app