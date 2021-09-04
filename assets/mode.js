function mode() {

    var body = document.body.style.background

    console.log(body)

    if (body == '') {
        console.log('Lightmode')
        body = "black"
    }
    else if (body == 'black') {
        console.log('Darkmode')
        document.body.style.background = "#fff"
    }
}