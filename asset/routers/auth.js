import { Router } from 'express'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'

// images
import earthImg from '../common/images/auth/earth-icon.png'
import phoneImg from '../common/images/auth/phone-icon.png'
import backImg from '../common/images/auth/back-icon.png'
import verifyPhoneImg from '../common/images/auth/verify-phone.png'

const authRouter = new Router()
const log = logger('auth')

const images = {
    verifyPhoneImg,
    earthImg,
    phoneImg,
    backImg
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
