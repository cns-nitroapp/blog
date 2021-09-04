const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

function enableDarkmode() {
    body = 'black';
}

function enableLightmode() {
    body = '#fff';
}

function mode() {

    var body = document.body.style.background

    if (userPrefersDark) {
        console.log('Previously Darkmode - Changed to Lightmode');
        enableLightmode();
    }
    else if (userPrefersLight) {
        console.log('Previously Lightmode - Changed to Darkmode');
        enableDarkmode();
    }

}