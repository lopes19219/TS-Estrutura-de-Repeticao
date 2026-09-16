function calcularDesconto(valor: number, institucional: boolean): number {
    let desconto = 0;

    if (valor > 600) {
        desconto = 15;
    } else if (valor > 300) {
        desconto = 10;
    } else if (valor > 100) {
        desconto = 5;
    }

    // O desconto total não pode ultrapassar 18%.
    if (institucional) {
        desconto += 3;
    }

    if (desconto > 18) {
        desconto = 18;
    }

    return desconto;
}

function calcularValorFinal(valor: number, institucional: boolean): string {
    const desconto = calcularDesconto(valor, institucional);
    const valorFinal = valor - (valor * desconto / 100);

    return `Valor: R$ ${valor} | Desconto: ${desconto}% | Valor final: R$ ${valorFinal.toFixed(2)}`;
}

// Dados de teste
console.log(calcularValorFinal(100, false));
console.log(calcularValorFinal(101, false));
console.log(calcularValorFinal(300, false));
console.log(calcularValorFinal(301, true));
console.log(calcularValorFinal(601, true));

/*
Registro das saídas

Valor: R$ 100 | Desconto: 0% | Valor final: R$ 100.00
Valor: R$ 101 | Desconto: 5% | Valor final: R$ 95.95
Valor: R$ 300 | Desconto: 5% | Valor final: R$ 285.00
Valor: R$ 301 | Desconto: 13% | Valor final: R$ 261.87
Valor: R$ 601 | Desconto: 18% | Valor final: R$ 492.82

Comparação com as regras

- R$100 não recebe desconto.
- R$101 entra na faixa de 5%.
- R$300 permanece com 5%.
- R$301 recebe 10% mais 3% por ser institucional, totalizando 13%.
- R$601 receberia 18% (15% + 3%), respeitando o limite máximo de 18%.
*/
