function createPeople(name, sobrenome) {
  let pessoa = {};
  pessoa;
  pessoa.sobrenome = sobrenome;
  function nomeCompleto() {
    return `${name} ${sobrenome}`;
  }
  pessoa.nomeCompleto = nomeCompleto;
  return pessoa;
}
let pessoaA = createPeaple("Gustavo", "Henrique");
console.log(pessoaA);
