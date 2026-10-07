const preco = 150;
const quantidade = 3;
const temCupom = false;
const total = preco * quantidade;

console.log(`Preço: R$ ${preco}`)
console.log(`Quantidade: ${quantidade}`)
console.log(`Cumpom: ${temCupom}`)
console.log(`Total sem desconto: R$ ${total}`)

if (temCupom){console.log(`Total com desconto: R$ ${total * 0.9}`)} else {console.log(`Total sem desconto: R$ ${total}`)}

console.log(`Preço: R$ ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Cupom: ${temCupom}`);

if (temCupom) {
    console.log(`Total com desconto: R$ ${total * 0.9}`);
} else {
    console.log(`Total sem desconto: R$ ${total}`);
}