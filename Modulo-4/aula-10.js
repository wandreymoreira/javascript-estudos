
const precos = [15, 25, 40, 60, 80, 100];

const precosFiltrados = precos.filter(function(numero) {
    return numero > 30;
});

console.log(precosFiltrados);

const precosComDesconto = precosFiltrados.map(function(numero) {
    return numero * 0.9;
});

console.log(precosComDesconto);
