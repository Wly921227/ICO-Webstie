import './style.less'
import '../../components'

import $ from 'jquery'

// images
import '../../common/images/faq/triangle-icon.png'

function initEvent () {
    $('.faqs-list .question.toggle').on('click', function (e) {
        e.preventDefault()
        const $thisFAQ = $(this).parent()
        const $faqs = $('.faq')
        if ($thisFAQ.hasClass('show')) {
            $thisFAQ.removeClass('show')
        } else {
            $faqs.removeClass('show')
            $thisFAQ.addClass('show')
        }
    })
}

initEvent()