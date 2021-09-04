const userPrefersDark;
const userPrefersLight;

function ifLight(mode, boolean) {
    const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

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
}

function enableLightmode() {
    document.body.style.background = '#fff';
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