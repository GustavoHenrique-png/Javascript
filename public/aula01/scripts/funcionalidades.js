let vaquinha = `vaca loka`
console.log(vaquinha)

function criaAluno(nome, primeiraNota, segundaNota) {
  let aluno = {}

  aluno.nome = nome
  aluno.primeiraNota = primeiraNota
  aluno.segundaNota = segundaNota

  return aluno
}

let aluno1 = criaAluno('jorge',1,3)
console.log(aluno1)