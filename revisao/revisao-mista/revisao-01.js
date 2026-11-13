

const nomeCliente = "Ana";
const valorCompra = 180.00;
const ehMembroVip = true;

let valorFinal = valorCompra;
let mensagemDesconto = "Sem desconto"

if (valorCompra >= 150 && ehMembroVip) {
    valorFinal = valorCompra * 0.80;
    mensagemDesconto = "Desconto Vip de 20% aplicado!"
} else if (valorCompra >= 150) {
    valorFinal = valorCompra * 0.90;
    mensagemDesconto = "Desconto padrão de 10% aplicado!"
} else {
    mensagemDesconto = "Nenhum desconto aplicável"
}

console.log(`
=== Resumo do Pedido ===
Cliente: ${nomeCliente}
Valor Original: R$ ${valorCompra.toFixed(2)}
Status: ${mensagemDesconto}
Valor Final a Pagar: R$ ${valorFinal.toFixed(2)}
`);

