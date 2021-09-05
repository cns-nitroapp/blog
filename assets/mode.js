let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    // Dark
    console.log('Darkmode')
    document.getElementById("demo").innerHTML = "Darkmode"
  } else {
    // Light
    console.log('Lightmode')
    document.getElementById("mode").innerHTML = "Lightmode"
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

function enableDarkmode() {
    document.body.style.background = 'black';
}

function enableLightmode() {
    document.body.style.background = '#fff';
}

function mode() {

    let mode = document.getElementById("mode").innerHTML

    if (mode = "Dark") {
        enableLightmode()
    }
    else if (mode = "Light") {
        enableDarkmode()
    }
}