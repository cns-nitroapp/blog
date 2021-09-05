let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
let mode = document.getElementById("mode").innerHTML;

const setColorScheme = e => {
  if (e.matches) {
    // Dark
    console.log('Darkmode')
    document.getElementById("mode").innerHTML = "Darkmode";
  } else {
    // Light
    console.log('Lightmode')
    document.getElementById("mode").innerHTML = "Lightmode";
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

function enableDarkmode() {
    document.body.style.background = 'black';
    mode = "Darkmode"
}

function enableLightmode() {
    document.body.style.background = '#fff';
    mode = "Lightmode"
}

function mode() {

    if (mode = "Darkmode") {
        enableLightmode()
    }
    else if (mode = "Lightmode") {
        enableDarkmode()
    }
}