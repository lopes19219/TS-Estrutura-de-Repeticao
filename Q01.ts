function classificarConsumo(consumo: number): string {

    // Valida valores negativos antes de classificar as faixas.
    if (consumo < 0) {
        return "Valor inválido";
    } else if (consumo <= 100) {
        return "Até 100 kWh";
    } else if (consumo <= 220) {
        return "101 a 220 kWh";
    } else {
        return "Acima de 220 kWh";
    }
}

// Dados de teste
console.log("0 -> " + classificarConsumo(0));
console.log("100 -> " + classificarConsumo(100));
console.log("101 -> " + classificarConsumo(101));
console.log("220 -> " + classificarConsumo(220));
console.log("221 -> " + classificarConsumo(221));

/*
Registro das saídas

0 -> Até 100 kWh
100 -> Até 100 kWh
101 -> 101 a 220 kWh
220 -> 101 a 220 kWh
221 -> Acima de 220 kWh

Comparação com as regras

- 0 ficou na faixa até 100 kWh.
- 100 permaneceu na primeira faixa.
- 101 entrou na faixa de 101 a 220 kWh.
- 220 continuou na segunda faixa.
- 221 passou para a faixa acima de 220 kWh.
*/
