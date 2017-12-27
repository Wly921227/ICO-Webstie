import logoImg from './images/header/logo.png'
import _ from 'lodash'

const header = {
    logoImg
}

const footer = {
    logoImg
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
            [page]: lan[page],
            header: lan['header'],
            footer: lan['footer']
        }
    },
    renderPage (page, req, res, data) {
        const loc = req.params.loc ? req.params.loc : tools.getLocCode(req)

        const language = tools.getLanguage(loc, page)
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
            page,
            loc
        }
        if (data) {
            renderData.data = data
        }

        res.render('components/layout', renderData)
        res.end()
    }
}

export default tools