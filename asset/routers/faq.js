import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

// images
import triangleImg from '../common/images/faq/triangle-icon.png'

const faqRouter = new Router()
const log = logger('faq')

const images = {
    triangleImg
}
const data = {
    noFooter: true,
    images
}

faqRouter.get('/faq', async (req, res) => {
    renderPage('faq', req, res, data)
})

faqRouter.get('/:loc/faq', async (req, res) => {
    renderPage('faq', req, res, data)
})

export default faqRouter
