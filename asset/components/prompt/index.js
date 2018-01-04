import './style.less'
import $ from 'jquery'

const $prompt = $('.prompt-content')
let timeout = 0
const setTheme = theme => {
    if ($prompt.data('theme') !== theme) {
        $prompt.data('theme', theme)
        $prompt.attr('data-theme', theme)
    }
}

export default {
    prompt (msg, time) {
        setTheme('prompt')
        this.show(msg, time)
    },
    success (msg, time) {
        setTheme('success')
        this.show(msg, time)
    },
    warning (msg, time) {
        setTheme('warning')
        this.show(msg, time)
    },
    error (msg, time) {
        setTheme('error')
        this.show(msg, time)
    },
    show (msg, time) {
        if ($prompt.hasClass('show')) {
            clearTimeout(timeout)
            $prompt.find('.prompt-message').html(msg)
        } else {
            $prompt.find('.prompt-message').html(msg)
            $prompt.addClass('show')
        }
        timeout = setTimeout(this.hide, time || 3000)

    },
    hide () {
        $prompt.removeClass('show')
    }
}