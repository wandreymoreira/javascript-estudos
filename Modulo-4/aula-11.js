
const numeros = [8, 12, 25, 35, 48, 60];

const primeiroNumero = numeros.find(function(numero) {
    return numero > 30;
});

const numeroNaoEncontrado = numeros.find(function(numero){
    return numero > 100;
});

console.log(primeiroNumero);
console.log(numeroNaoEncontrado);



