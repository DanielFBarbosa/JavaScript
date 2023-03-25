function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 5) {
        //' Boa Madrugada'
       img.src = 'fotomadrugada.png'
       document.body.style.background = '#fa7d20'
    } else if (hora > 5 && hora <= 12) {
        //'Bom Dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#bbb38a'
    } else if (hora > 12 && hora <= 18) {
       //'Boa Tarde'
        img.src = 'fototarde.png'
        document.body.style.background = '#fdc68b'
    } else {
        //'Boa Noite'
        img.src = 'fotonoite.png'
        document.body.style.background = '#2b2c28'
    }
} 