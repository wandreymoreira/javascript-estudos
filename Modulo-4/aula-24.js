
const produtos = [
    "Notebook",
    "Mouse", 
    undefined
];

const [produto1, produto2, produto3 = "Não cadastrado"] = produtos;

console.log(produto1);
console.log(produto2);
console.log(produto3);
