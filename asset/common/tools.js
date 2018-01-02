import constants from './constants'

import logoImg from './images/header/logo.png'
import facebookImg from './images/footer/facebook.png'
import telegramImg from './images/footer/telegram.png'
import twitterImg from './images/footer/twitter.png'
import redditImg from './images/footer/reddit.png'
import mailImg from './images/footer/mail.png'

const header = {
    logoImg
}

const footer = {
    facebookImg,
    telegramImg,
    twitterImg,
    redditImg,
    mailImg
}

const tools = {
    getLocCode (req) {
        const locCode = ((req.headers && req.headers['accept-language'])
            ? req.headers['accept-language'].split(';')[0]
            : 'en').toLowerCase()
        if (locCode.indexOf('zh') > -1 && locCode.indexOf('cn')) {
            return 'zh-CN'
        } else if (locCode.indexOf('zh') > -1) {
            return 'zh-TW'
        } else if (locCode.indexOf('ar') > -1) {
            return 'ar-SA'
        } else {
            return 'en-US'
        }
    },
    getLanguage (loc, page) {
        let lan = {}
        try {
            lan = require(`../language/${loc}`)
        } catch (e) {
            lan = require(`../language/${constants.defaultLoc}`)
        }
        return {
            [page]: lan[page] || {},
            header: lan['header'],
            footer: lan['footer'],
            global: lan['global']
        }
    },
    renderPage (page, req, res, data) {
        // 语言
        const loc = req.params.loc ? req.params.loc : tools.getLocCode(req)
        // 路径
        let path = req.path
        const pl = path.split('/')
        if (req.params.loc) {
            data.hadLoc = true
            pl.shift()
            pl.shift()
            path = `${pl.join('/')}`
        } else {
            pl.shift()
            path = `${pl.join('/')}`
        }
        // 文案
        const language = tools.getLanguage(loc, page)
        // 图片
        const images = {
            header,
            footer
        }
        if (data && data.images) {
            images[page] = data.images
            delete data.images
        }

        const renderData = {
            language,
            images,
            path,
            page,
            loc
        }
        if (data) {
            renderData.data = data
        }

        console.log('============== renderData ==============', renderData)

        res.render('components/layout', renderData)
        res.end()
    }
}

export default tools