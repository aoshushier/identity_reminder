// ==UserScript==
// @name My Values
// @namespace aoshushier
// @version 1.7
// @include *.google.*tbm=isch*
// @include *.google.*tbm=vid*
// @include *.google.*tbs=sbi*
// @include *.google.*imgurl*
// @include *.youtube.com*
// @include *.reddit.*
// @include https://fitgirl-repacks.site/
// @grant none
// @require https://cdn.jsdelivr.net/npm/sweetalert2@9
// @icon https://www.google.com/favicon.ico
// @description Google Image reminder with confirm delay and show delay after confirmation.
// ==/UserScript==


// 
// fitgirls // add to movies

init({
    youtube: true,
    reddit: true,
    delay_minutes: 2,
    show_button_delay_ms: 1500
})

function init(settings) {

    if (unsafeWindow.localStorage.my_values_time && Date.now() - JSON.parse(unsafeWindow.localStorage.my_values_time) < settings.delay_minutes * 60 * 1000)
        return
    
    let text
    if (location.host == "reddit.com" || location.host == "youtube.com")
        text = `Why can't I cope with people disagreeing with me? Why do I have the compulsion to argue in a mean way? I fear people who disagree with me and judge me and look down on me for not sharing their beliefs, so I try to put them down. Regardless of my beliefs, I am no better than them. I cannot control what they believe. There are many people who let people disagree with them without getting upset. I have a lot of hate and bitterness stored deep within me. What do I need to do to release it? Why is my method of coping to feel "good" to try and be right, or look at porn? Why do I blame my coping mechanisms on my childhood without learning how to do things correctly on my own?`
        else
        text = ``

    Swal.fire({
        // imageUrl: 'https://i.imgur.com/412fELy.png',
        // width: 720,
        width: 1280,
        // title: 'I will NOT search for girls TODAY.',
        title: `Am I being indistractable?`,
        html: `<div>${text}</div>
<div style="font-size: 0.6em">[Disable message for ${settings.delay_minutes} minute(s)]</div>`,
        confirmButtonText: 'This internet usage aligns with my values.',
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
