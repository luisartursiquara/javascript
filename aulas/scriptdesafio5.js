var txtn = document.getElementById('fnum')
var lista = []
var res = document.getElementById('ilista')
var resposta = document.getElementById('calculo')
function clicar1(){
    var txtn = document.getElementById('fnum')
    var n = Number(txtn.value)

    var c = 0 
    var soma = 0
    if (n <= 0 || n > 100) {
        window.alert('[ERRO] o numero digitado precisa estar entre 1 e 100!!')
    } else {
        let item = document.createElement('option')
        item.innerHTML = `O numero ${n} foi adicionado`
        res.appendChild(item)
        lista.push(n)
        c += 1
        lista.length = c
        soma += n
    }
}
function clicar2(){
    lista.sort()
    resposta.innerHTML = `Ao todo temos ${c} valores cadastrados < br> O maior valor encontrado foi ${lista[c - 1]} <br> O menor valor encontrado foi ${lista[0]} <br> A soma dos valores e ${soma} <br> a media dos valores encontrado e ${soma / c}`
}