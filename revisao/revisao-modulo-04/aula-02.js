
const produtos = [
  { nome: "Notebook Dell", preco: 4500, emEstoque: true, categoria: "eletronicos" },
  { nome: "Cadeira Gamer", preco: 1200, emEstoque: false, categoria: "moveis" },
  { nome: "Monitor LG", preco: 950, emEstoque: true, categoria: "eletronicos" },
  { nome: "Teclado Bluetooth", preco: 250, emEstoque: true, categoria: "eletronicos" },
  { nome: "Mesa de Escritório", preco: 600, emEstoque: true, categoria: "moveis" }
];

const eletronicosEmEstoque = produtos.filter(produto => {
  return produto.emEstoque === true && produto.categoria === "eletronicos";
});

const listaPromocional = eletronicosEmEstoque.map(produto => {
    return {
        nome: produto.nome,
        precoComDesconto: produto.preco * 0.90
    };
});

console.log(listaPromocional);
