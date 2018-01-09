const request = require('superagent')

const args = process.argv[2]
console.log(`=====> clear cache path: ${args}`)
const url = `http://10.18.101.21:12315/cgi-bin/activity.sh?${args}`
const watchUrl = 'http://10.18.101.21:12315/cgi-bin/getactivity.sh?'

const STATUS = 'Completed'

console.log(`=====> http request url: ${url}`)

let i = 1

request.get(url)
.set('Accept', '*/*')
.then(res => {
    if (res.status === 200 && res.text) {
        const id = res.text.split('/').pop().split('\'').shift()
        console.log(`=====> progress http request id: ${id}`)
        watchProgress(id, i)
    }
})

function watchProgress(id, i) {
    const url = watchUrl + id
    console.log(`=====> get progress time: ${i}`)
    request.get(url)
    .set('Accept', '*/*')
    .then(res => {
        if (res.status === 200 && res.text) {
            if (res.text.indexOf(STATUS) === -1) {
                i++
                setTimeout(() => {
                    watchProgress(id, i)
                }, 2000)
            } else {
                console.log('=====> Successfully!!! Clear cache finished!!!')
            }
        }
    })
}