const ua = typeof window === 'undefined'
    ? ''
    : navigator.userAgent.toLowerCase()
const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1

const utils = {
    isAndroid,
    dataParams (data) {
        data = data || {}
        let param = ''
        for (let key in data) {
            param += key + '=' + data[key] + '&'
        }

        return '?' + param.substr(0, param.length - 1)
    },
    dateFormat (_date, _format) {
        if (!_date) {
            return ''
        }
        let format = _format || 'YYYY年MM月DD日 HH:m:s'
        const formatArr = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss']
        const date = new Date(_date)
        const year = date.getFullYear()
        const month = utils.toDou(date.getMonth() + 1)
        const day = utils.toDou(date.getDate())
        const hour = utils.toDou(date.getHours())
        const minute = utils.toDou(date.getMinutes())
        const second = utils.toDou(date.getSeconds())
        const dateArr = [year, month, day, hour, minute, second]
        for (let i = 0; i < formatArr.length; i++) {
            format = format.replace(formatArr[i], dateArr[i])
        }
        return format
    },
    urlParams (_url) {
        let url = _url || window.location.search.split('?').pop()
        let paramList = url.split('&')
        let params = {}
        for (let i = 0; i < paramList.length; i++) {
            let value = paramList[i]
            let map = value.split('=')
            params[map[0]] = map[1]
        }
        console.log('url params: ', params)
        return params
    },
    toDou (n) {
        return n < 10 ? '0' + n : '' + n
    },
    debounce (func, wait, immediate) {
        let timeout
        return function () {
            const context = this
            const args = arguments
            let later = function () {
                timeout = null
                if (!immediate) {
                    func.apply(context, args)
                }
            }
            if (immediate && !timeout) {
                func.apply(context, args)
            }
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
        }
    },
    setFontSize (planSize = 750, grid = 20, time = 0) {
        console.log('window.innerWidth', window.innerWidth)
        if (window.innerWidth > 450 && time <= 4) {
            setTimeout(() => {
                time++
                utils.setFontSize(planSize, grid, time)
            }, 500)
        } else {
            const defaultWidth = planSize || 750                           // 设计图宽度
            const itemSize = grid ? (grid * 2) : (24 * 2)                  // 期望1rem=设计图每个格子 * 2px (避免字体出现小于12px，所以*2)
            const width = window.innerWidth >= 750 ? 750 : window.innerWidth
            const oneRem = width / (defaultWidth / itemSize)               // 屏幕1rem=Xpx
            console.warn('1rem = ' + oneRem * 2 + 'px')
            const fontSize = oneRem / 16 * 100
            document.querySelector('html').style.fontSize = fontSize + '%'
        }
    },
    formatNumber (num) {
        let str = '0'
        if (num) {
            str = num.toString().indexOf('.') !== -1 ? num.toString().
                replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
                    return $1 + ','
                }) : num.toString().
                replace(/(\d)(?=(\d{3})+\b)/g, function ($0, $1) {
                    return $1 + ','
                })
        }
        return str
    }
}

export default utils