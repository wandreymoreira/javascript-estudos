
const produtos = [
  { nome: "Notebook Dell", preco: 4500, emEstoque: true, categoria: "eletronicos" },
  { nome: "Cadeira Gamer", preco: 1200, emEstoque: false, categoria: "moveis" },
  { nome: "Monitor LG", preco: 950, emEstoque: true, categoria: "eletronicos" },
  { nome: "Teclado Bluetooth", preco: 250, emEstoque: true, categoria: "eletronicos" },
  { nome: "Mesa de Escritório", preco: 600, emEstoque: true, categoria: "moveis" }
];

const ordenadosMenorPreco = [...produtos].sort((a,b) => a.preco - b.preco);

const ordenadosMaiorPreco = [...produtos].sort((a, b) => b.preco - a.preco);

console.log("Menor preço:", ordenadosMenorPreco);
console.log("Maior preço:", ordenadosMaiorPreco);
console.log("Original intacto:", produtos);