
const formaPagamento = "boleto";

const statusEstoque = true;

if (formaPagamento !== "cartao" && statusEstoque === true) {
    console.log("Pedido realizado com sucesso!")
} else {
    console.log("Atenção: Forma de pagamento indisponivel ou produto sem estoque.")
}