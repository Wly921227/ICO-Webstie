import './style.less'

import '../../common/images/header/logo.png'

import $ from 'jquery'

const $toggle = $('.header .language .toggle')
const $languageList = $('.change-language')

const setLanguageListSize = () => {
    const top = $toggle.height()
    const left = $toggle.offset().left
    if (window.innerWidth >= 896) {
        const width = $toggle.width()
        $languageList.css('width', width + 'px')
        $languageList.css('top', top - 1)
        $languageList.css('left', left)
        $languageList.css('right', 'inherit')
    } else {
        $languageList.css('width', 'auto')
        $languageList.css('top', top - 1)
        $languageList.css('left', left)
        $languageList.css('right', 0)
    }
}

// 展开语言列表
$toggle.on('click', e => {
    e.preventDefault()
    $languageList.toggleClass('open')
})
$(window).on('resize', setLanguageListSize)
$(document).on('scroll', function (e) {
    e.preventDefault()
    if ($languageList.hasClass('open')) {
        $languageList.removeClass('open')
    }
})

// 锚点滚动
let interval = 0
const scrollPage = (top, time) => {
    clearInterval(interval)
    const intervalTime = 20
    const s = time / intervalTime
    const scrollTop = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop
        || 0
    let d = (top - scrollTop) / s
    let i = 0
    interval = setInterval(() => {
        if (i <= s) {
            window.scrollTo(0, d * i + scrollTop)
            i++
        } else {
            clearInterval(interval)
        }
    }, intervalTime)
}

$('.header .nav a').on('click', function (e) {
    e.preventDefault()
    const $this = $(this)
    const href = $this.attr('href')
    const id = href.split('#')[1] || 'index'
    const top = $(`#${id}`).offset().top
    scrollPage(top, 300)
    console.log(id)
})

setLanguageListSize()
