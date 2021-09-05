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

function setElements(background, modeicon, titlepadding, color, cataloguetitle, logo, catalogueitem, authorbg, authorcolor, pagination, status, navborder, codebg, code) {

    if ("/"+location.pathname.split('/')[1] == "/") {
        for (var i = 0; i < document.getElementsByTagName("p").length; i++) {
            document.getElementsByTagName("p")[i].style.color = catalogueitem;
        }
        for (var i = 0; i < document.getElementsByTagName("h1").length; i++) {
            document.getElementsByTagName("h1")[i].style.color = cataloguetitle;
        }
        document.getElementById("pagination").style.borderColor = pagination;
    }
    else {
        document.getElementById("title-padding").style.color = titlepadding;
        document.getElementById("code").style.background = codebg;
        document.getElementById("code").style.color = code;
    }

    document.body.style.background = background;
    document.getElementById("modeicon").style.transform = modeicon;
    document.body.style.color = color;  
    document.getElementById("logo").style.filter = logo;   
    document.getElementById("status").src = status
    document.getElementById("nav").style.border = navborder

    for (var i = 0; i < document.getElementsByClassName("author").length; i++) {
        document.getElementsByClassName("author")[i].style.color = authorcolor;
    }

    for (var i = 0; i < document.getElementsByClassName("author").length; i++) {
        document.getElementsByClassName("author")[i].style.background = authorbg;
    }

}


function enableDarkmode() {
    setMode("Darkmode");
    setElements("black", "rotate(180deg)", "#e7e6fa", "#aaa", "#e7e6fa", "invert(0%)", "#aaa", "#4339f2", "#e7e6fa", "#353535", "https://status.constellate.de/embed-status/dark-md", "0 2px 2px -2px rgb(53, 53, 53)", "#212121", "#f7f7f7");
}

function enableLightmode() {
    setMode("Lightmode")
    setElements("#fff", "rotate(0deg)", "#353535", "rgb(85, 85, 85)", "#555", "invert(100%)", "#555", "#e7e6fa", "#4339f2", "#e5e5e5", "https://status.constellate.de/embed-status/light-md", "0 2px 2px -2px rgb(0 0 0 / 20%)", "#f9f9f9", "#aaa");
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