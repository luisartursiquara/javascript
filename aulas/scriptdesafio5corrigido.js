let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) < 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
 if (isNumero(num.value) && !inLista(num.value, valores)){
     valores.push(Number(num.value))
     res.innerHTML = ''
     let item = document.createElement('option')
     item.text = `O valor ${num.value} foi adcionado`
     lista.appendChild(item)
 } else {
    window.alert('valor invalido ou ja encontrado na lista')
 }
 num.value = ''
 num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Por favor adicione um numero')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores [pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> ao todo temos ${tot} elementos cadastrados`
        res.innerHTML += `<p> o maior valor encontrado foi ${maior}`
        res.innerHTML += `<p> o menor valor encontrado foi ${menor}`
        res.innerHTML += `<p> somando todos os elementos temos o valor final de ${soma}`
        res.innerHTML += `<p> a media de todos os elementos e de ${media}`
    }
}