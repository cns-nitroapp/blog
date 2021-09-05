let colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
var bodybg = document.body.style.background;
var modeicon = document.getElementById("modeicon").style.transform;
var titlepadding = document.getElementById("title-padding").style.color;
var bodycolor = document.body.style.color;
var cataloguetitle = document.getElementById("catalogue-title").style.color;
var logofilter = document.getElementById("logo").style.filter;

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
    bodybg = 'black';
    modeicon = "rotate(180deg)";
    titlepadding = "#e7e6fa";
    bodycolor = "#aaa";
    cataloguetitle = "#aaa";
    logofilter = "invert(0%)";
}

function enableLightmode() {
    setMode("Lightmode")
    bodybg = '#fff';
    modeicon= "rotate(0deg)";
    titlepadding = "#353535";
    bodycolor = "#555";
    cataloguetitle = "#555";
    logofilter = "invert(100%)";
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