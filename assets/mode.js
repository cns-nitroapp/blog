let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {
  if (e.matches) {
    // Dark
    console.log('Darkmode')
    document.getElementById("demo").innerHTML = "Dark"
  } else {
    // Light
    console.log('Lightmode')
    document.getElementById("mode").innerHTML = "Light"
  }
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

function enableDarkmode() {
    document.body.style.background = 'black';
    ifLight('set', false);
}

function enableLightmode() {
    document.body.style.background = '#fff';
    ifLight('set', true)
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