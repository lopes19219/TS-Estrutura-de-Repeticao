interface Estudante {
    matricula: number;
    nome: string;
}

function buscarMatricula(lista: Estudante[], matriculaProcurada: number): void {

    let encontrado = false;
    let iteracoes = 0;

    // O laço é interrompido assim que a matrícula é encontrada.
    for (let i = 0; i < lista.length; i++) {
        iteracoes++;

        if (lista[i].matricula === matriculaProcurada) {
            console.log(`Matrícula encontrada: ${lista[i].nome}`);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log("Matrícula não encontrada.");
    }

    console.log(`Iterações: ${iteracoes}`);
}

const estudantes: Estudante[] = [
    { matricula: 101, nome: "Ana" },
    { matricula: 102, nome: "Bruno" },
    { matricula: 103, nome: "Carlos" },
    { matricula: 104, nome: "Diana" }
];

// Dados de teste
console.log("Busca bem-sucedida:");
buscarMatricula(estudantes, 103);

console.log("\nBusca malsucedida:");
buscarMatricula(estudantes, 999);

/*
Registro das saídas

Busca bem-sucedida:
Matrícula encontrada: Carlos
Iterações: 3

Busca malsucedida:
Matrícula não encontrada.
Iterações: 4

Comparação com as regras

- A busca pela matrícula 103 encontrou Carlos e o laço parou imediatamente.
- A busca pela matrícula 999 percorreu toda a lista e informou que a matrícula não existe.
- A busca bem-sucedida fez 3 iterações, enquanto a malsucedida fez 4.
*/
