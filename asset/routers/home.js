import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/utils'

const homeRouter = new Router()
const log = logger('home')

homeRouter.get('/home', async (req, res) => {
    renderPage('home', req, res)
})

homeRouter.get('/:loc/home', async (req, res) => {
    renderPage('home', req, res)
})

export default homeRouter