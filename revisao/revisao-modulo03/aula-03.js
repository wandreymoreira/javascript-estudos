
const limiteCartao = 500;
const valorCompra = 120;
let totalGasto = 0;
let tentativa = 1;

while (tentativa <= 10) {
    if (totalGasto + valorCompra > limiteCartao) {
        console.log(`Tentativa #${tentativa}: Limite aitingido! Compra bloqueada. Total gasto: R$ ${totalGasto}`);
        break;
    }
    totalGasto += valorCompra;
  console.log(`Tentativa #${tentativa}: Compra aprovada! Total gasto até agora: R$ ${totalGasto}`);
  tentativa++;
}