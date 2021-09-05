function ifLight(mode, boolean) {
    let userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    if (mode == 'get') {
        if (userPrefersLight) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (mode == 'set') {
        userPrefersLight = boolean
    }

}

function enableDarkmode() {
    document.body.style.background = 'black';
    ifLight('set', false);
}

function enableLightmode() {
    document.body.style.background = '#fff';
    ifLight('set', true)
}

function mode() {

    if (ifLight('get', '') == false) {
        console.log('Previously Darkmode - Changed to Lightmode');
        enableLightmode();
    }
    else if (ifLight('get', '') == true) {
        console.log('Previously Lightmode - Changed to Darkmode');
        enableDarkmode();
    }

}