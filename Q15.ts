function menu(opcoes: number[]): void {

    let i = 0;
    let opcao = 0;

    // O do...while garante que o menu apareça pelo menos uma vez e só termina na opção 3.
    do {
        console.log("\nMenu");
        console.log("1 - Cadastrar");
        console.log("2 - Consultar");
        console.log("3 - Sair");

        opcao = opcoes[i];
        console.log(`Opção escolhida: ${opcao}`);

        switch (opcao) {
            case 1:
                console.log("Cadastro realizado.");
                break;

            case 2:
                console.log("Consulta realizada.");
                break;

            case 3:
                console.log("Encerrando o programa.");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
        }

        i++;

    } while (opcao !== 3 && i < opcoes.length);
}

// Dados de teste (contém uma opção inválida)
menu([4, 1, 2, 3]);

/*
Registro das saídas

Menu
1 - Cadastrar
2 - Consultar
3 - Sair
Opção escolhida: 4
Opção inválida. Tente novamente.

Menu
1 - Cadastrar
2 - Consultar
3 - Sair
Opção escolhida: 1
Cadastro realizado.

Menu
1 - Cadastrar
2 - Consultar
3 - Sair
Opção escolhida: 2
Consulta realizada.

Menu
1 - Cadastrar
2 - Consultar
3 - Sair
Opção escolhida: 3
Encerrando o programa.

Comparação com as regras

- O menu foi exibido pelo menos uma vez.
- A opção 4 foi tratada como inválida e o menu foi repetido.
- As opções 1 e 2 executaram suas ações corretamente.
- O programa encerrou somente quando recebeu a opção 3.
*/
