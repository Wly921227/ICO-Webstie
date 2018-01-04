import 'babel-polyfill'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import getConfig from '../config'

getConfig(() => {
    const app = require('./app')

    // view engine setup
    app.set('views', path.join(__dirname, '../views'))
    app.set('view engine', 'ejs')
    app.use(helmet())
    app.disable('x-powered-by')
    app.use('/public', express.static(path.join(__dirname, '../public'),
        {maxAge: 60 * 60 * 24 * 365}))

    // catch 404 and forward to error handler
    app.use((req, res) => {
        const err = new Error('Not Found')
        res.status(err.status || 404)
    })

    // error handler
    app.use((err, req, res) => {
        // set locals, only providing error in development
        res.locals.message = err.message
        res.locals.error = {}

        // render the error page
        res.status(err.status || 500)
    })

    const port = 6600
    global.port = port

    app.listen(port)
    console.log(
        `\n==>  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`)
})