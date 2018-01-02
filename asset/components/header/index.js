import './style.less'

import '../../common/images/header/logo.png'

import $ from 'jquery'

// 展开语言列表
const $languageList = $('.language')
$('.header .language .toggle').on('click', e => {
    e.preventDefault()
    $languageList.toggleClass('open')
})