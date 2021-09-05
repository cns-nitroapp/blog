let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const setColorScheme = e => {

    if (getMode() == "Darkmode") {
        enableDarkmode();
    }
    else if (getMode() == "Lightmode") {
        enableLightmode();
    }
    else {
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
}

setColorScheme(colorSchemeQueryList);
colorSchemeQueryList.addListener(setColorScheme);

function getMode() {

    let mode = document.cookie;
    mode = mode.replace("mode=", "")
    mode = mode.replace("; path=/", "")

    console.log(mode)

    return mode;
    
}

function setMode(value) {

    document.cookie = "mode=" + value + "; path=/";
    document.getElementById("mode").innerHTML = value;

}


function enableDarkmode() {
    setMode("Darkmode")
    document.body.style.background = 'black';
    document.getElementById("modeicon").style.transform = "rotate(180deg)";
    document.getElementById("title-padding").style.color = "#e7e6fa";
    document.body.style.color = "#aaa";
    document.getElementById("logo").style.filter = "invert(0%)"
}

function enableLightmode() {
    setMode("Lightmode")
    document.body.style.background = '#fff';
    document.getElementById("modeicon").style.transform = "rotate(0deg)";
    document.getElementById("title-padding").style.color = "#353535";
    document.body.style.color = "#555";
    document.getElementById("logo").style.filter = "invert(100%)"
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