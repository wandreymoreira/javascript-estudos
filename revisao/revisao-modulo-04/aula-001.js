
const pedidos = [
  { senha: 101, cliente: "Lucas", lanche: "X-Bacon", status: "preparando" },
  { senha: 102, cliente: "Mariana", lanche: "Smash Duplo", status: "atrasado" },
  { senha: 103, cliente: "Pedro", lanche: "X-Salada", status: "preparando" },
  { senha: 104, cliente: "Carla", lanche: "Combo Família", status: "pronto" }
];

pedidos.push({ senha: 105, cliente: "Rafael", lanche: "X-Tudo", status: "preparando" })

const ultimoPedido = pedidos[pedidos.length - 1];
console.log("Último cliente da fila:", ultimoPedido.cliente);

const pedidoAtrasado = pedidos.find((pedido) => pedido.status === "atrasado");
console.log("Pedido atrasado:", pedidoAtrasado.cliente, "-", pedidoAtrasado.lanche);

    const indiceEncontrado = pedidos.findIndex((pedido) => pedido.senha === 103);

    if (indiceEncontrado !== -1) {
        pedidos.splice(indiceEncontrado, 1)
    }

    console.log("Fila atualizada de pedidos:", pedidos);
