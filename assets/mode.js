let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    // Dark
    console.log('Darkmode')
    enableDarkmode()
  } else {
    // Light
    console.log('Lightmode')
    enableLightmode()
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

function getMode() {

    let mode = document.getElementById("mode").innerHTML;

    return mode;
    
}

function setMode(value) {

    document.getElementById("mode").innerHTML = value;

}


function enableDarkmode() {
    setMode("Darkmode")
    document.body.style.background = 'black';
    document.getElementById('modeicon').style.transform = "rotate(0)"
}

function enableLightmode() {
    setMode("Lightmode")
    document.body.style.background = '#fff';
    document.getElementById('modeicon').style.transform = "rotate(180)"
}

function mode() {

    var usermode = getMode()

    if (usermode == "Darkmode") {
        enableLightmode()
    }
    else if (usermode == "Lightmode") {
        enableDarkmode()
    }
}