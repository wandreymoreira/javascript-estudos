
const valorCompra = 150;
const ehMembroVip = true;

if (valorCompra >= 100 && ehMembroVip === true) {
    console.log("Desconto especial de 20% aplicado!")
} else if (valorCompra >= 100) {
    console.log("Desconto padrão de 10% aplicado") 
} else {
    console.log("Sem direito a desconto.")
}
