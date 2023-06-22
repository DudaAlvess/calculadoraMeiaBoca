function exibeMsg(){
    let result 
    result = parseInt(document.getElementById("texto1").value) + parseInt(document.getElementById("texto2").value)
    document.getElementById ("tituloGeral").innerHTML = result 
 alert("resultado: + result")
}
function somar(){
    let soma = parseInt(document.getElementById("texto1").value) + parseInt(document.getElementById("texto2").value)
 alert("resultado da soma:" +soma)
}
function subtracao(){
    let subtracao = parseInt(document.getElementById("texto1").value) - parseInt(document.getElementById("texto2").value)
alert("resultado da subtração:" +subtracao)
}