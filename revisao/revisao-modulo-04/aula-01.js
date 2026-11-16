
const catalogo = [
  { id: 1, nome: "Mouse Gamer", preco: 120, estoque: 15 },
  { id: 2, nome: "Teclado Mecânico", preco: 350, estoque: 0 },
  { id: 3, nome: "Monitor 24pol", preco: 890, estoque: 5 },
  { id: 4, nome: "Headset USB", preco: 180, estoque: 8 }
];

    catalogo.push({ id: 5, nome: "Webcam HD", preco: 210, estoque: 12 })

    const ultimoProduto = catalogo[catalogo.length - 1];
    console.log(ultimoProduto.nome);

    const produtoEsgotado = catalogo.find((produto) => produto.estoque === 0);
console.log("Produto esgotado:", produtoEsgotado.nome);

    const indiceMonitor = catalogo.findIndex((produto) => produto.id === 3);
    console.log("Índice do Monitor 24pol:", indiceMonitor);

    if (indiceMonitor !== -1) {
  catalogo.splice(indiceMonitor, 1);
}
console.log("Catálogo atualizado:", catalogo);
