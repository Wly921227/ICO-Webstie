import './style.less'
import '../../components'

import $ from 'jquery'

import prompt from '../../components/prompt'
import regular from '../../common/regular'

let language
try {
    language = require(`../../language/${GLOBAL.loc}`)
} catch (e) {
    language = require('../../language/en_US')
}

const invalid = language.authRegister.invalid

const formData = {}

function initEvent () {
    const $dialog = $('.dialog-warp')
    // dialog close
    $dialog.on('click', '.close', e => {
        e.preventDefault()
        $dialog.toggleClass('hidden')
    })
    // dialog continue
    $dialog.on('click', '.btn', e => {
        e.preventDefault()
        formData.selector = $('input[name="selection"]:checked').val()
        $dialog.toggleClass('hidden')
        console.log(formData)
    })
    const $form = $('.register-form')
    // refresh ccap
    $form.on('click', '.ccap', function (e) {
        e.preventDefault()
        $(this).attr('src', `/auth/ccap/image/${new Date().getTime()}`)
    })
    // get email code
    $form.on('click', '.get-mail-code', function (e) {
        e.preventDefault()
        const email = $form.find('[name=email]').val()
        const verify = $form.find('[name=verify-code]').val()
        if (!regular.email.test(email)) {
            prompt.warning(invalid.emial)
            return false
        } else if (!verify || verify.length !== 4) {
            prompt.warning(invalid.verify)
            return false
        } else {
            // TODO post get email code request
            $.ajax({
                url: '/auth/verify/email',
                type: 'POST',
                data: {
                    email,
                    verify
                },
                dataType: 'json',
                success: response => {
                    if (response.success) {
                        // TODO tip message

                    } else {
                        // TODO tip message

                    }
                }
            })
        }
    })
    // submit form
    $form.on('submit', function (e) {
        e.preventDefault()
        console.log('submit')
        // TODO verify form data: email, verify code, email code, password, re password

    })
}

initEvent()
