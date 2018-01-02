import './style.less'
import '../../components'

import $ from 'jquery'

const scrollToPage = page => {
    const $oldPage = $('.auth-warp [class*="-page"].center')
    const $newPage = $(`.auth-warp .${page}-page`)
    const oldIndex = parseInt($oldPage.data('index'))
    const newIndex = parseInt($newPage.data('index'))
    if ($newPage.length) {
        if (newIndex > oldIndex) {
            $oldPage.removeClass('center')
            $oldPage.addClass('left')
            $newPage.removeClass('right')
            $newPage.addClass('center')
        } else {
            $oldPage.removeClass('center')
            $oldPage.addClass('right')
            $newPage.removeClass('left')
            $newPage.addClass('center')
        }
    }
}

const initEvent = () => {
    // 填写手机号
    $('.phone-controller').on('click', '.phone-form .submit', e => {
        e.preventDefault()
        // TODO 输入内容验证
        // TODO 提交手机请求
        // 用户验证页面
//        scrollToPage('verify')
        // 用户登录页面
        scrollToPage('password')
    })
    // 顶部返回按钮
    $('.title-bar .back').on('click', function (e) {
        e.preventDefault()
        const $this = $(this)
        const page = $this.data('back')
        scrollToPage(page)
    })
}

initEvent()