
const precos = [15, 25, 40, 60, 80, 100];

const indicePreco = precos.findIndex(function(numero){
    return numero > 30;

})

const indiceNaoEncontrado = precos.findIndex(function(numero){
    return numero > 150;
})

console.log(indicePreco);
console.log(indiceNaoEncontrado);