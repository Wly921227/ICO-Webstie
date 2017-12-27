import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

const loginRouter = new Router()
const log = logger('login')

loginRouter.get('/auth/login', async (req, res) => {
    renderPage('login', req, res)
})

loginRouter.get('/:loc/auth/login', async (req, res) => {
    renderPage('login', req, res)
})

export default loginRouter
