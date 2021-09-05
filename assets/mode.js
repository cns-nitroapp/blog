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

function setElements(background, modeanimation, modeicon, titlepadding, color, cataloguetitle, logo, catalogueitem, authorbg, authorcolor) {

    if ("/"+location.pathname.split('/')[1] == "/") {
        document.getElementById("catalogue-title").style.color = cataloguetitle + "!important";
        document.getElementById("catalogue-item").style.color = catalogueitem;
    }
    else {
        document.getElementById("title-padding").style.color = titlepadding;
    }

    document.body.style.background = background;
    document.getElementById("modeicon").style.animation = modeanimation;
    document.getElementById("modeicon").style.transform = modeicon;
    document.body.style.color = color;  
    document.getElementById("logo").style.filter = logo;   
    document.getElementById("author").style.background = authorbg + "!important";
    document.getElementById("author").style.color = authorcolor + "!important";
}


function enableDarkmode() {
    setMode("Darkmode");
}

function enableLightmode() {
    setMode("Lightmode")
}

function mode() {

    var usermode = getMode()

    if (usermode == "Darkmode") {
        enableLightmode()
        setElements("#fff", "crotation 500ms", "rotate(0deg)", "#353535", "#555", "#555", "invert(100%)", "#aaa", "#e7e6fa", "#4339f2");
    }
    else if (usermode == "Lightmode") {
        enableDarkmode()
        setElements("black", "rotation 500ms", "rotate(180deg)", "#e7e6fa", "#aaa", "#aaa", "invert(0%)", "#aaa", "#4339f2", "#e7e6fa");
    }
}