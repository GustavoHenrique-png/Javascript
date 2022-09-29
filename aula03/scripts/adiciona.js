var botaoAdicionar = document.querySelector('button#buttonAdd')

botaoAdicionar.addEventListener("click", function(event){
    var formAdiciona = document.querySelector('form#registraAluno')
    var aluno = obterAluno(formAdiciona)

    adicionaAluno(aluno)
})
function obterAluno(form){
    var aluno ={
        nome: form.nome.value,
        primeiraNota: form.primeiraNota.value,
        segundaNota: form.segundaNota.value
    }

    return aluno
}
function montaLinha(aluno){
    var alunoTr = document.createElement("tr")
    alunoTr.classList.add('aluno')

    alunoTr.appendChild(montaCelula(aluno.nome,'info-nome'))
    alunoTr.appendChild(montaCelula(aluno.primeiraNota,'info-prNota'))
    alunoTr.appendChild(montaCelula(aluno.segundaNota,'info-sgNota'))

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