import Promise from 'promise'

if (typeof window !== 'undefined') {
    window.Promise = Promise
}

const request = require('superagent')

import _ from 'lodash'
import { dataParams } from './utils'

/**
 * options {object} {
 *  prefix {string}: 前缀
 *  url {string}: 连接
 *  type {string}: 类型
 *  data {object}: 参数
 *  adapter {function}: 数据结构适配器
 *  error {function}: 异常处理适配器
 * }
 */

const Http = {
    query (options) {
        let opt = {}
        if (typeof options !== 'object') {
            opt = {
                url: options,
                data: '',
                type: 'GET'
            }
        } else {
            opt = _.assign({
                url: '',
                data: '',
                type: 'GET'
            }, options)
        }
        let url
        if (/^(http:|https:)/.test(opt.url)) {
            url = opt.url
        } else {
            const isNode = typeof window === 'undefined'
            url = isNode ? `http://localhost:${global.port}${opt.url}`
                : `${window.location.origin}${opt.url}`
        }
        const func = opt.adapter ? opt.adapter : (data) => {
            return data
        }
        const error = opt.error ? opt.error : (error) => {
            return error
        }
        console.log(`=======> ${opt.type} request =======`)
        console.log(`=======> ${url}`)
        console.log(`=======> `, opt.data)
        let Request
        if (opt.type === 'GET') {
            Request = request.get(url + opt.data).
                set('Accept', 'application/json')
        } else if (opt.type === 'POST') {
            if (opt.contentType) {
                Request = request.post(url).set('Content-Type', opt.contentType)
            } else {
                Request = request.post(url).
                    set('Content-Type', 'application/json')
            }
            Request.send(opt.data)
        }

        if (opt.prefix) {
            Request = Request.use(opt.prefix)
        }

        return new Promise((resolve, reject) => {
            Request.then(res => {
                if (res.status === 200 && res.body) {
                    const data = func(res.body)
                    console.log('=======> ', res.body)
                    resolve(data)
                }
            }).catch(err => {
                error(err)
                reject(err.response ? err.response.body : err)
            })
        })
    },
    get (options) {
        let opt = {}
        if (typeof options !== 'object') {
            opt = {
                url: options,
                data: '',
                type: 'GET'
            }
        } else {
            opt = _.assign(options, {
                type: 'GET'
            })
        }
        if (opt.data) {
            opt.data = dataParams(opt.data)
        }
        return this.query(opt)
    },
    post (options) {
        let opt = {}
        if (typeof options !== 'object') {
            opt = {
                url: options,
                data: {},
                type: 'GET'
            }
        } else {
            opt = _.assign({
                data: {}
            }, options, {
                type: 'POST'
            })
        }
        return this.query(opt)
    }
}

export default Http