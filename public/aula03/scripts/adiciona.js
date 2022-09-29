var botaoAdicionar = document.querySelector('button#buttonAdd')

botaoAdicionar.addEventListener("click", function(event){
    var formAdiciona = document.querySelector('form#registraAluno')
    var aluno = obterAluno(formAdiciona)

    adicionaAluno(aluno)
})
function obterAluno(form){
    
    let nota1= form.primeiraNota.value
    let nota2= form.segundaNota.value

    let media = eval(`(${nota1}+${nota2})/2`)
    console.log(nota1)

    let situacao = checaMedia(media)

    function checaMedia(){
        if(media >= 6){
            return ('Aprovado')
        }
        else{
            return('Reprovado')
        }
    }

    var aluno ={
        nome: form.nome.value,
        primeiraNota: form.primeiraNota.value,
        segundaNota: form.segundaNota.value,
        media : media,
        situacao: situacao
    }

    return aluno
}
function montaLinha(aluno){
    var alunoTr = document.createElement("tr")
    alunoTr.classList.add('aluno')

    alunoTr.appendChild(montaCelula(aluno.nome,'info-nome'))
    alunoTr.appendChild(montaCelula(aluno.primeiraNota,'info-prNota'))
    alunoTr.appendChild(montaCelula(aluno.segundaNota,'info-sgNota'))
    alunoTr.appendChild(montaCelula(aluno.media,'info-media'))
    alunoTr.appendChild(montaCelula(aluno.situacao,'info-status'))

    return alunoTr
}
function montaCelula(conteudo,classe){
    var elemento = document.createElement('td')

    elemento.textContent = conteudo
    elemento.classList.add(classe)

    return elemento
}
function adicionaAluno(aluno){
    var alunoTr = montaLinha(aluno)
    var tabela = document.querySelector('table#tabelaAluno')
    tabela.appendChild(alunoTr)
}