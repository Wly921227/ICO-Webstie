import './style.less'
import '../../components'

import $ from 'jquery'

window.$ = $

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

window.scrollToPage = scrollToPage