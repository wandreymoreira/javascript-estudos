
for(let i = 1; i <= 10; i++) {
    if (i === 7) {
        continue;
    } else if (i % 2 === 0) {
        console.log(`Pacote #${i}: Etiqueta VERDE (Entrega Expressa)`);
    } else console.log(`Pacote #${i}: Etiqueta PADRÃO`);
}