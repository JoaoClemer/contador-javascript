var btn = window.document.getElementById('btn1')
btn.addEventListener('click', contar)
var inicio = window.document.getElementById('inp1')
var fim = window.document.getElementById('inp2')
var passo = window.document.getElementById('inp3')
var res = window.document.getElementById('res')

function contar() {
    if ((inicio.value.length) <= 0 || (fim.value.length) <= 0) {
        res.innerHTML = `Impossível contar!`
        window.alert('Verifique os números digitados e tente novamente!')
    } else if (Number(passo.value) > 0) {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = "Contando: <br>"
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else if (i > f) {
            for (var c = i; c >= f; c -= p)
                res.innerHTML += `${c} `
        }

    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        res.innerHTML = "Contando: <br>"

        p = 1
        for (var c = i; c <= f; c += p) {

            res.innerHTML += `${c} `
        }
    }
}        