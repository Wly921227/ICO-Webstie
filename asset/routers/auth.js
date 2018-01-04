import { Router } from 'express'
import nodeCcap from 'ccap'
import crypto from 'crypto'
import { logger } from '../common/logger4'
import { renderPage } from '../common/tools'
import regular from '../common/regular'

// images

const authRouter = new Router()
const log = logger('auth')
const ccap = nodeCcap({
    width: 150,
    height: 50,
    offset: 35,
    quality: 100,
    fontsize: 45,
    generate: function () {
        const len = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let str = ''
        for (let i = 0; i < 4; i++) {
            str += len[Math.floor(Math.random() * len.length)]
        }
        return str
    }
})

const getHash = str => {
    const shasum = crypto.createHash('sha1')
    shasum.update(str)
    return shasum.digest('hex')
}

const images = {}

authRouter.get('/auth/register', async (req, res) => {
    renderPage('authRegister', req, res, {
        images
    })
})

authRouter.get('/:loc/auth/register', async (req, res) => {
    renderPage('authRegister', req, res, {
        images
    })
})

authRouter.get('/auth/ccap/image/:flag', async (req, res) => {
    res.setHeader('Cache-Control', 'no-cache')
    try {
        const ary = ccap.get()
        const text = ary[0].toLowerCase()
        req.session.ccapCode = getHash(text)
        const buffer = ary[1]
        res.set('Content-Type', 'jpeg')
        res.send(buffer)
        res.end()
    } catch (e) {
        log.error(e)
        res.end()
    }
})

authRouter.post('/auth/verify/email', async (req, res) => {
    const {
        email,
        verify
    } = req.body
    if (!regular.email.test(email)) {
        res.json({
            success: false,
            code: 500,
            msg: ''
        })
        res.end()
    } else if (!verify) {
        res.json({
            success: false,
            code: 500,
            msg: ''
        })
        res.end()
    } else {
        const ccapCode = req.session.ccapCode
        const verifyCode = getHash(verify)
        try {
            if (ccapCode === verifyCode) {
                // TODO 发送邮件请求
                res.json({
                    success: true,
                    code: 200,
                    result: true
                })
                res.end()
            } else {
                res.json({
                    success: false,
                    code: 500,
                    msg: ''
                })
                res.end()
            }
        } catch (e) {
            res.json({
                success: false,
                code: 500,
                msg: ''
            })
            res.end()
        }
    }
})

export default authRouter
