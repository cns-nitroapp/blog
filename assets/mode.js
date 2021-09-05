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

function setElements(background, modeicon, titlepadding, color, cataloguetitle, logo, catalogueitem, authorbg, authorcolor, pagination, status, navborder) {

    if ("/"+location.pathname.split('/')[1] == "/") {
        document.getElementById("catalogue-title").style.color = cataloguetitle;
        document.getElementById("catalogue-item").style.color = catalogueitem;
        document.getElementById("pagination").style.borderColor = pagination;
    }
    else {
        document.getElementById("title-padding").style.color = titlepadding;
    }

    document.body.style.background = background;
    document.getElementById("modeicon").style.transform = modeicon;
    document.body.style.color = color;  
    document.getElementById("logo").style.filter = logo;   
    document.getElementById("author").style.background = authorbg;
    document.getElementById("author").style.color = authorcolor;
    document.getElementById("status").src = status
    document.getElementById("nav").style.border = navborder
}


function enableDarkmode() {
    setMode("Darkmode");
    setElements("black", "rotate(180deg)", "#e7e6fa", "#aaa", "#e7e6fa", "invert(0%)", "#aaa", "#4339f2", "#e7e6fa", "#353535", "https://status.constellate.de/embed-status/dark-md", "0 3px 2px -2px rgb(53, 53, 53)");
}

function enableLightmode() {
    setMode("Lightmode")
    setElements("#fff", "rotate(0deg)", "#353535", "#555", "#555", "invert(100%)", "#555", "#e7e6fa", "#4339f2", "#e5e5e5", "https://status.constellate.de/embed-status/light-md", "0 2px 2px -2px rgb(0 0 0 / 20%)");
}

function mode() {

    var usermode = getMode()

    if (usermode == "Darkmode") {
        enableLightmode()
        document.getElementById("modeicon").style.animation = "crotation 500ms";
    }
    else if (usermode == "Lightmode") {
        enableDarkmode()
        document.getElementById("modeicon").style.animation = "rotation 500ms";
    }
}