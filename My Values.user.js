// ==UserScript==
// @name My Values
// @namespace aoshushier
// @version 1.6.4
// @include *.google.*tbm=isch*
// @include *.google.*tbm=vid*
// @include *.google.*tbs=sbi*
// @include *.google.*imgurl*
// @include *.reddit.*
// @include https://fitgirl-repacks.site/
// @grant none
// @require https://cdn.jsdelivr.net/npm/sweetalert2@9
// @icon https://www.google.com/favicon.ico
// @description Google Image reminder with confirm delay and show delay after confirmation.
// ==/UserScript==

// @include *.youtube.com*

// 
// fitgirls // add to movies

init({
    youtube: false,
    delay_minutes: 2,
    show_button_delay_ms: 1500
})

function init(settings) {

    if (unsafeWindow.localStorage.my_values_time && Date.now() - JSON.parse(unsafeWindow.localStorage.my_values_time) < settings.delay_minutes * 60 * 1000)
        return

    Swal.fire({
        // imageUrl: 'https://i.imgur.com/412fELy.png',
        // width: 720,
        width: 1280,
        // title: 'I will NOT search for girls TODAY.',
        title: `Is this an energy or time leech?`,
        html: `<div>I'll be glad to not PMO today.</div>
<div style="font-size: 0.6em">[Disable message for ${settings.delay_minutes} minute(s)]</div>`,
        confirmButtonText: 'Nope!',
        backdrop: `rgb(0,0,0,1)`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        onBeforeOpen: () => {
            document.getElementsByClassName('swal2-title')[0].style.lineHeight = '1.5em'

            var button_area = document.getElementsByClassName('swal2-actions')[0]
            button_area.style.visibility = "hidden"

            setTimeout(function() {
                button_area.style.visibility = "visible"
            }, settings.show_button_delay_ms)
        },
    }).then(() => {
        unsafeWindow.localStorage.my_values_time = JSON.stringify(Date.now())
    })

}
