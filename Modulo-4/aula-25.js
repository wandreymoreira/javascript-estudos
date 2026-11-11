
const produtos = [
    { nome: "Notebook", preco: 3500, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 15 },
    { nome: "Teclado", preco: 150, estoque: 0 },
    { nome: "Monitor", preco: 1200, estoque: 8 },
    { nome: "Webcam", preco: 250, estoque: 3 },
    { nome: "Headset", preco: 300, estoque: 0 }
];

const [primeiroProduto, segundoProduto] = produtos;

console.log("Primeiro Produto:", primeiroProduto);
console.log("Segundo Produto:", segundoProduto);