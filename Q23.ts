function relatorioNotas(turmas: number[][]): void {

    let maiorNota = turmas[0][0];

    // Cada turma é percorrida separadamente para calcular sua própria média.
    for (let i = 0; i < turmas.length; i++) {

        let soma = 0;

        for (let j = 0; j < turmas[i].length; j++) {
            soma += turmas[i][j];

            if (turmas[i][j] > maiorNota) {
                maiorNota = turmas[i][j];
            }
        }

        const media = soma / turmas[i].length;
        console.log(`Turma ${i + 1} - Média: ${media.toFixed(2)}`);
    }

    console.log(`Maior nota geral: ${maiorNota}`);
}

// Dados de teste
const turmas = [
    [7, 8, 9, 6],
    [10, 5, 8, 7],
    [6, 9, 10, 8]
];

relatorioNotas(turmas);

/*
Registro das saídas

Turma 1 - Média: 7.50
Turma 2 - Média: 7.50
Turma 3 - Média: 8.25
Maior nota geral: 10

Comparação com as regras

- A média da Turma 1 foi calculada apenas com suas quatro notas.
- A média da Turma 2 foi calculada apenas com suas quatro notas.
- A média da Turma 3 foi calculada apenas com suas quatro notas.
- A maior nota geral encontrada entre todas as turmas foi 10.
*/
