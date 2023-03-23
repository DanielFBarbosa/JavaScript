function carregar(): {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'fotomanha.png' alt = foto da manhã
        else if(hora >= 12 && hora< 12 ) {
            //Boa Tarde
        img.src = 'fototarde.png' alt = 'foto da tarde'    
            else {
                //Boa Noite
                img src = 'fotonoite.png' alt = 'Foto da noite'
            }
        }
    }
}

 