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

function setElements(background, modeicon, titlepadding, color, cataloguetitle, logo) {
    try {
        document.body.style.background = background;
        document.getElementById("modeicon").style.transform = modeicon;
        document.getElementById("title-padding").style.color = titlepadding;
        document.body.style.color = color;
        document.getElementById("catalogue-title").style.color = cataloguetitle;
        document.getElementById("logo").style.filter = logo;
    }
    catch (e) {
    }
}


function enableDarkmode() {
    setMode("Darkmode");
    setElements("black", "rotate(180deg)", "#e7e6fa", "#aaa", "#aaa", "invert(0%)");
}

function enableLightmode() {
    setMode("Lightmode")
    setElements("#fff", "rotate(0deg)", "#353535", "#555", "#555", "invert(100%");
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