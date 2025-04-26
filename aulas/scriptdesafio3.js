function contar() {
var ini = document.getElementById('txti')  
var fim = document.getElementById('txtf')
var passo = document.getElementById('txtp')
var res = document.getElementById('res')
if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('erro faltam dados')
    res.innerHTML = ('impossivel contar')
}else {
    res.innerHTML = ('Contando...')
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('Passo invalido, considerando PASSO = 1')
        p = 1
    }
    if (i < f) {
        for(let c = i; c < f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    } else if (i > f){
        for(let c = i; c > f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
    }
}








/*if (n1.value >= n2.value && p.value > 0 || n1.value <= n2.value && p.value < 0) {
    window.alert('O valor de inicio precisa ser menor que o de fim')
} else if (n1.value <= n2.value && p.value > 0 || n1.value >= n2.value && p.value < 0) {
    while (n1.value < n2.value) {
        var soma = n1.value + p.value

    }
}*/
}