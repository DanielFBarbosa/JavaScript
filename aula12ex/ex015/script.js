function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO]!! Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
      //  res.innerHTML = `Idade calculada: ${idade}`
       var gênero = " "
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && < 10) {
                //criança
                img.setAttribute('src','menino.png')
            } else if (idade < 21) {
                //joven
                img.setAttribute('src','fotojoven.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','homem-adulto.png')
            } else {
                //idoso
                img.setAttribute('src','fotoidoso.png')
            }
    } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && < 10) {
                //criança
            } else if (idade < 21) {
                //joven
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
}