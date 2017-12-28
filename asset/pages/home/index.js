import './style.less'
import '../../components'

import $ from 'jquery'

// images
import '../../common/images/home/logo-big.png'
import '../../common/images/home/play-icon.png'

// resource
import '../../common/images/resource/binance.png'
import '../../common/images/resource/video-cover.png'
import '../../common/images/resource/coverage.png'
import '../../common/images/resource/user-image.png'

$(document).ready(() => {
    $('.time-line').height($(window).height() * .73)
})