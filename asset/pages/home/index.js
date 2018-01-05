import './style.less'
import '../../components'

// images
import '../../common/images/home/logo-big.png'
import '../../common/images/home/play-icon.png'

// resource
import '../../common/images/resource/pic_whatsyee.jpg'

import $ from 'jquery'
import Wonder from '../../common/wonder'

$('.time-line').height($(window).height() * .73)

// wonder lines
function initWonder () {
    const big = window.innerWidth > 450
    new Wonder({
        el: '.canvas-wonder',
        clickWithDotsNumber: 3,
        lineMaxLength: big ? 300 : 200,
        dotsNumber: big ? 80 : 45,
        dotsAlpha: .3,
        speed: 1.3
    })
}

initWonder()

window.addEventListener('resize', e => {
    e.preventDefault()
    initWonder()
})