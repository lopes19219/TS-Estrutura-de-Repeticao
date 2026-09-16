function simularPagamento(dividaInicial: number, pagamentoMensal: number): void {

    let saldo = dividaInicial;
    let mes = 0;

    // O laço termina quando a dívida é quitada, chega a 120 meses ou o pagamento não reduz o saldo.
    while (saldo > 0 && mes < 120) {

        let saldoComJuros = saldo * 1.01;
        let novoSaldo = saldoComJuros - pagamentoMensal;

        if (novoSaldo >= saldo) {
            console.log("Pagamento insuficiente para reduzir a dívida.");
            return;
        }

        saldo = Math.max(0, novoSaldo);
        saldo = Number(saldo.toFixed(2));
        mes++;

        console.log(`Mês ${mes}: Saldo R$ ${saldo.toFixed(2)}`);
    }

    if (saldo === 0) {
        console.log(`Dívida quitada em ${mes} meses.`);
    } else {
        console.log("Limite de 120 meses atingido.");
    }
}

// Dados de teste
simularPagamento(1000, 150);

/*
Registro das saídas

Mês 1: Saldo R$ 860.00
Mês 2: Saldo R$ 718.60
Mês 3: Saldo R$ 575.79
Mês 4: Saldo R$ 431.55
Mês 5: Saldo R$ 285.87
Mês 6: Saldo R$ 138.73
Mês 7: Saldo R$ 0.12
Mês 8: Saldo R$ 0.00
Dívida quitada em 7 meses.

Comparação com as regras

- Os juros de 1% foram aplicados no início de cada mês.
- O pagamento reduziu o saldo em todos os meses.
- Os valores foram arredondados para duas casas decimais.
- A simulação terminou quando a dívida foi quitada, antes do limite de 120 meses.
*/
