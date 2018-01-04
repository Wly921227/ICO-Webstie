import { Router } from 'express'
import { renderPage } from '../common/tools'

const appRouter = new Router()

appRouter.get('/404', async (req, res) => {
    renderPage('404', req, res, {})
})

export default appRouter