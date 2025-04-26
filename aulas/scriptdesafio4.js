function calcular(){
    var ini = document.getElementById('txtn')
    var res = document.getElementById('seltab')
    if (ini.value.length == 0){
        alert('Por favor digite um numero')
    } else {
    var i = Number(ini.value)
    res.innerHTML = ''
    for (c = 1;c <= 10; c++){
        let item = document.createElement('option')
        item.text = `${i} x ${c} = ${i*c}`
        res.appendChild(item)
     }
    }
}