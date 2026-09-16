function detectarSequencia(codigos: number[]): void {

    let encontrado = false;

    // O laço para assim que encontra a primeira sequência de três valores iguais.
    for (let i = 0; i <= codigos.length - 3; i++) {

        if (
            codigos[i] === codigos[i + 1] &&
            codigos[i] === codigos[i + 2]
        ) {
            console.log(`Sequência encontrada: valor ${codigos[i]}, índice inicial ${i}.`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log("Nenhuma sequência encontrada.");
    }
}

// Dados de teste
console.log("Teste com presença:");
detectarSequencia([5, 8, 8, 8, 3, 7]);

console.log("\nTeste sem presença:");
detectarSequencia([1, 2, 3, 4, 5, 6]);

/*
Registro das saídas

Teste com presença:
Sequência encontrada: valor 8, índice inicial 1.

Teste sem presença:
Nenhuma sequência encontrada.

Comparação com as regras

- No primeiro teste, a sequência 8, 8, 8 foi encontrada e a busca parou no índice 1.
- No segundo teste, nenhuma sequência de três valores consecutivos iguais foi encontrada.
*/
