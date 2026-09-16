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

    // O frete grátis só vale para pedidos acima de R$500 nas regiões NE e SE.
    if (totalPedido > 500 && (regiao === "NE" || regiao === "SE")) {
        frete = 0;
    }

    return `Região: ${regiao} | Pedido: R$ ${totalPedido} | Frete: R$ ${frete}`;
}

// Dados de teste
console.log(calcularFrete("N", 300));
console.log(calcularFrete("NE", 300));
console.log(calcularFrete("NE", 600));
console.log(calcularFrete("SE", 600));
console.log(calcularFrete("CO", 600));
console.log(calcularFrete("S", 400));
console.log(calcularFrete("X", 200));

/*
Registro das saídas

Região: N | Pedido: R$ 300 | Frete: R$ 40
Região: NE | Pedido: R$ 300 | Frete: R$ 25
Região: NE | Pedido: R$ 600 | Frete: R$ 0
Região: SE | Pedido: R$ 600 | Frete: R$ 0
Região: CO | Pedido: R$ 600 | Frete: R$ 30
Região: S | Pedido: R$ 400 | Frete: R$ 35
Região inválida

Comparação com as regras

- N com R$300 mantém o frete de R$40.
- NE com R$300 mantém o frete de R$25.
- NE com R$600 recebe frete grátis.
- SE com R$600 recebe frete grátis.
- CO com R$600 não recebe frete grátis.
- S com R$400 mantém o frete de R$35.
- X é tratado como região inválida.
*/
