
const produtos = [
  { nome: "Notebook Dell", preco: 4500, emEstoque: true, categoria: "eletronicos" },
  { nome: "Cadeira Gamer", preco: 1200, emEstoque: false, categoria: "moveis" },
  { nome: "Monitor LG", preco: 950, emEstoque: true, categoria: "eletronicos" },
  { nome: "Teclado Bluetooth", preco: 250, emEstoque: true, categoria: "eletronicos" },
  { nome: "Mesa de Escritório", preco: 600, emEstoque: true, categoria: "moveis" }
];


const ordenadosMenorPreco = [...produtos].sort((a, b) => a.preco - b.preco);
const ordenadosMaiorPreco = [...produtos].sort((a, b) => b.preco - a.preco);

const [primeiroLugar, 
  ,              
  terceiroLugar, 
  ,              
  ,              
  sextoLugar = { nome: "Produto não cadastrado", preco: 0 } 
] = ordenadosMaiorPreco;

console.log(`1º Lugar: ${primeiroLugar.nome} - R$ ${primeiroLugar.preco}`);
console.log(`3º Lugar: ${terceiroLugar.nome} - R$ ${terceiroLugar.preco}`);
console.log(`6º Lugar: ${sextoLugar.nome}`);

console.log("--- Lista do Menor para o Maior Preço ---");

ordenadosMenorPreco.forEach(item => {
  console.log(`${item.nome} - R$ ${item.preco}`);
});