const preco = 80;
const unidades = 3;
const temCupom = true;

const total = unidades * preco;

console.log(`Preço Unitário: R$ ${preco}`)
console.log(`Unidades: ${unidades} UNID`)

if (temCupom) {  
    console.log (`Total com desconto: R$ ${total * 0.9}`)
} else {
    console.log(`Total sem desconto: R$ ${total}`)
}

console.log(`Total: R$ ${total}`)