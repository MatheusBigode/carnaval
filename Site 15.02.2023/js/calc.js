function Pegar() {
    let idade = document.getElementById("idade")
    let pessoas = document.getElementById("pessoas")

    let Idade = Number(idade.value)
    let Pessoas = Number(pessoas.value)

    let result = (Idade / Pessoas) - 1000000000000000

    document.getElementById("resultPegar").value = result
}

function LimpPegar () {
    Idade = (" ")
    Pessoas = (" ")
    var limpidade = document.getElementById("idade").value = limpidade
    var limppessoas = document.getElementById("pessoas").value = limppessoas
    document.getElementById("resultPegar").value = " "
}

function Doença() {
    let pessoasD = document.getElementById("pessoasD")

    let PessoasD = Number(pessoasD.value)

    chance = (PessoasD * 10) + 100

    document.getElementById("resultDoença").value = chance
}

function LimpDoença() {
    pessoasD = (" ")
    var limppessoasD = document.getElementById("pessoasD").value = limppessoasD
    document.getElementById("resultDoença").value = " "
}