let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

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

function getMode() {

    let mode = document.getElementById("mode").innerHTML;

    return mode;
    
}

function setMode(value) {

    document.getElementById("mode").innerHTML = value;

}


function enableDarkmode() {
    document.body.style.background = 'black';
    setMode("Darkmode")
}

function enableLightmode() {
    document.body.style.background = '#fff';
    setMode("Lightmode")
}

function mode() {

    usermode == getMode()

    if (usermode == "Darkmode") {
        enableLightmode()
    }
    else if (usermode == "Lightmode") {
        enableDarkmode()
    }
}