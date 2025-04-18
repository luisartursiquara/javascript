
function carregar() {
    var mensagem = document.getElementById('texto')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 5
    mensagem.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 0 && hora <= 12){
        //BOM DIA
        imagem.src = 'imagens/manhareal.jpg'
        document.body.style.background = '#e2cd9f'
    } else if(hora >= 12 && hora < 18) {
        //BOA TARDE
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#3089fd'
    }else if (hora > 18 && hora <= 23){
        //BOA NOITE
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#9800fd'
    }
}
