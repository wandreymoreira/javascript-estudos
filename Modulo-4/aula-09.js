
const precos = [10, 20, 30, 40, 50];

const precosComDesconto = precos.map(function(numero) {
    return numero * 0.9;
});

console.log(precosComDesconto);
