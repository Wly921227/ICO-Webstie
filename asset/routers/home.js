import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

import logoBigImg from '../common/images/home/logo-big.png'
import utils from '../common/utils'

const homeRouter = new Router()
const log = logger('home')

const images = {
    logoBigImg
}

homeRouter.get('/home', async (req, res) => {
    renderPage('home', req, res, {
        totalNum: utils.formatNumber(1234567890),
        progress: 9,
        images
    })
})

homeRouter.get('/:loc/home', async (req, res) => {
    renderPage('home', req, res, {
        totalNum: utils.formatNumber(1234567890),
        progress: 9,
        images
    })
})

export default homeRouter