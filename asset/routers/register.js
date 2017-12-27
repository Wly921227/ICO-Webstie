import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

const registerRouter = new Router()
const log = logger('register')

registerRouter.get('/auth/register', async (req, res) => {
    renderPage('register', req, res)
})

registerRouter.get('/:loc/auth/register', async (req, res) => {
    renderPage('register', req, res)
})

export default registerRouter
