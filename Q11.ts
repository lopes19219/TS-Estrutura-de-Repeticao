function analisarConsumo(consumos: number[]): string {

    let total = 0;
    let diasAcimaDaMedia = 0;

    // Primeiro percorre o array para calcular o total da semana.
    for (let i = 0; i < consumos.length; i++) {
        total += consumos[i];
    }

    const media = total / consumos.length;

    // Depois percorre novamente para contar os dias acima da média.
    for (let i = 0; i < consumos.length; i++) {
        if (consumos[i] > media) {
            diasAcimaDaMedia++;
        }
    }

    return `Total: ${total} kWh | Média: ${media.toFixed(2)} kWh | Dias acima da média: ${diasAcimaDaMedia}`;
}

// Dados de teste
const consumoSemana = [20, 25, 18, 30, 22, 35, 20];
console.log(analisarConsumo(consumoSemana));

/*
Registro das saídas

Total: 170 kWh | Média: 24.29 kWh | Dias acima da média: 3

Comparação com as regras

- O total da semana foi 170 kWh.
- A média semanal foi 24.29 kWh.
- Os dias 25, 30 e 35 ficaram acima da média, totalizando 3 dias.
*/
