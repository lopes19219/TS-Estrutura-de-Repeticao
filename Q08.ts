function calcularFrete(regiao: string, totalPedido: number): string {
    let frete = 0;

    switch (regiao) {
        case "N":
            frete = 40;
            break;
        case "NE":
            frete = 25;
            break;
        case "CO":
            frete = 30;
            break;
        case "SE":
            frete = 20;
            break;
        case "S":
            frete = 35;
            break;
        default:
            return "Região inválida";
    }

    if (totalPedido > 500 && (regiao === "NE" || regiao === "SE")) {
        frete = 0;
    }

    return `Região: ${regiao} | Pedido: R$ ${totalPedido} | Frete: R$ ${frete}`;
}

// Matriz de testes
console.log(calcularFrete("N", 300));
console.log(calcularFrete("NE", 300));
console.log(calcularFrete("NE", 600));
console.log(calcularFrete("SE", 600));
console.log(calcularFrete("CO", 600));
console.log(calcularFrete("S", 400));
console.log(calcularFrete("X", 200));
