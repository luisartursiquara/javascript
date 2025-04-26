function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > 2025){
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = 2025 - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','imagens2/homemcriança.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens2/homemjovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src', 'imagens2/homemadulto.jpg')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','imagens2/homemidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 11){
                //criança
                img.setAttribute('src','imagens2/mulhercriança.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src','imagens2/mulherjovem.jpg')
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','imagens2/mulheradulta.jpg')
            } else if (idade >= 60){
                //idoso
                img.setAttribute('src','imagens2/mulheridosa.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}