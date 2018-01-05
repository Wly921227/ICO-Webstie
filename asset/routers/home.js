import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'
import utils from '../common/utils'

// images
import logoBigImg from '../common/images/home/logo-big.png'
import playIcon from '../common/images/home/play-icon.png'

// resource
import videoImg from '../common/images/resource/pic_whatsyee.jpg'

const homeRouter = new Router()
const log = logger('home')

const images = {
    logoBigImg,
    playIcon,
    // resource
    videoImg
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