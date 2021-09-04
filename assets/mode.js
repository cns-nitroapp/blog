const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

function enableDarkmode() {
    document.body.style.background = 'black';
}

function enableLightmode() {
    document.body.style.background = '#fff';
}

function mode() {

    if (userPrefersDark) {
        console.log('Previously Darkmode - Changed to Lightmode');
        enableLightmode();
    }
    else if (userPrefersLight) {
        console.log('Previously Lightmode - Changed to Darkmode');
        enableDarkmode();
    }

}