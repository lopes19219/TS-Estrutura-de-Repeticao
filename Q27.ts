function pesquisaSatisfacao(respostas: number[]): void {

    let soma = 0;
    let validas = 0;
    let invalidas = 0;
    let frequencias = new Array(11).fill(0);

    // Apenas notas de 0 a 10 entram na média e na distribuição de frequências.
    for (const nota of respostas) {

        if (nota < 0 || nota > 10) {
            invalidas++;
            continue;
        }

        soma += nota;
        validas++;
        frequencias[nota]++;
    }

    console.log("Relatório de Frequências");

    for (let i = 0; i <= 10; i++) {
        console.log(`Nota ${i}: ${frequencias[i]}`);
    }

    console.log(`Respostas inválidas: ${invalidas}`);

    if (validas === 0) {
        console.log("Média: Não há respostas válidas.");
    } else {
        console.log(`Média: ${(soma / validas).toFixed(2)}`);
    }
}

// Dados de teste
pesquisaSatisfacao([10, 8, 7, 5, 10, -1, 11, 0, 8, 6, 10]);

/*
Registro das saídas

Relatório de Frequências
Nota 0: 1
Nota 1: 0
Nota 2: 0
Nota 3: 0
Nota 4: 0
Nota 5: 1
Nota 6: 1
Nota 7: 1
Nota 8: 2
Nota 9: 0
Nota 10: 3
Respostas inválidas: 2
Média: 7.11

Comparação com as regras

- As notas -1 e 11 foram ignoradas e contadas como inválidas.
- Apenas as notas de 0 a 10 entraram no cálculo da média.
- A distribuição mostrou quantas vezes cada nota apareceu.
- Caso não existisse nenhuma resposta válida, o programa exibiria "Média: Não há respostas válidas.", evitando divisão por zero.
*/
