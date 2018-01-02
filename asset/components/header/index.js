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

setLanguageListSize()
