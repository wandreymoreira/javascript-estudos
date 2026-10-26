const nota = 90;

if (nota >=90) {
    console.log("Excelente");
} else if (nota >= 70) {
    console.log("bom");
} else if (nota >= 40) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}

const preco = 150;
const quantidade = 3;
const temCupom = true;

const total = preco * quantidade;

if (temCupom) {
    console.log(`total com desconto: R$ ${total * 0.9}`);
} else {
    console.log(`Total sem desconto: R$ ${total}`);
}

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

for (let contador = 10; contador <= 50; contador++) console.log(contador)

    for (let contador = 1; contador <= 10; contador++) {
        if (contador % 2 === 0) {
            console.log(contador);
        }
    }

  







