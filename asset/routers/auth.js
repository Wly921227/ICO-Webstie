import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

// images
import earthImg from '../common/images/auth/earth-icon.png'
import phoneImg from '../common/images/auth/phone-icon.png'

const authRouter = new Router()
const log = logger('auth')

const images = {
    earthImg,
    phoneImg
}

authRouter.get('/auth', async (req, res) => {
    renderPage('auth', req, res, {
        images
    })
})

authRouter.get('/:loc/auth', async (req, res) => {
    renderPage('auth', req, res, {
        images
    })
})

export default authRouter
