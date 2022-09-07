function insere(num){
    var primeironumero = document.getElementById('visor').innerHTML
    document.getElementById('visor').innerHTML = primeironumero + num 

}
function limpa(){
    document.getElementById('visor').innerHTML = ''
}
function calcula(){
    var resultado = document.getElementById('visor').innerHTML

    if (resultado){
        document.getElementById('visor').innerHTML = eval(resultado)
    }
    else{
        alert("nada ai po")
    }
}