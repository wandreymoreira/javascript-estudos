
const valorConta = 180;
const quantidadePessoas = 4;

let taxaGarcom = valorConta * 0.10;

const valorTotal = valorConta + taxaGarcom;

const valorPorPessoa = valorTotal / quantidadePessoas;

console.log(`O valor total com a taxa é R$ ${valorTotal}. Dividido para 4 pessoas, fica R$ ${valorPorPessoa} para cada.`);