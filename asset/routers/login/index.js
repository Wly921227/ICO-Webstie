import { Router } from 'express'
import { logger } from '../../common/logger4'
import { getLocCode, getLanguage } from '../../common/utils'

const loginRouter = new Router()
const log = logger('login')

loginRouter.get('/login', async (req, res) => {
    const loc = getLocCode(req)
    const language = getLanguage(loc, 'login')

    log.info(loc)
    res.render('login', {
        language,
        loc
    })
})

loginRouter.get('/:loc/login', async (req, res) => {
    const {
        loc
    } = req.params

    const language = getLanguage(loc, 'login')
    log.info(loc)

    res.render('login', {
        language,
        loc
    })
})

export default loginRouter
