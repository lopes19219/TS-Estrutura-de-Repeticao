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

/* Saída: 

Região: N | Pedido: R$ 300 | Frete: R$ 40
Região: NE | Pedido: R$ 300 | Frete: R$ 25
Região: NE | Pedido: R$ 600 | Frete: R$ 0
Região: SE | Pedido: R$ 600 | Frete: R$ 0
Região: CO | Pedido: R$ 600 | Frete: R$ 30
Região: S | Pedido: R$ 400 | Frete: R$ 35
Região inválida */
