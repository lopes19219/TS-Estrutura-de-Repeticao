function relatorioSensores(leituras: number[]): void {

    let leiturasValidas: number[] = [];
    let soma = 0;

    // O continue ignora leituras negativas e o break encerra quando encontra 999.
    for (const leitura of leituras) {

        if (leitura === 999) {
            break;
        }

        if (leitura < 0) {
            continue;
        }

        leiturasValidas.push(leitura);
        soma += leitura;
    }

    const media = soma / leiturasValidas.length;

    console.log(`Leituras válidas: ${leiturasValidas.join(", ")}`);
    console.log(`Média: ${media.toFixed(2)}`);
}

// Dados de teste
relatorioSensores([22, -5, 24, 999, 25]);

/*
Registro das saídas

Leituras válidas: 22, 24
Média: 23.00

Comparação com as regras

- A leitura -5 foi ignorada por ser negativa.
- O valor 999 encerrou o lote.
- A leitura 25 não entrou no relatório porque apareceu após o encerramento.
- Apenas 22 e 24 foram considerados válidos, gerando média 23.00.
*/
