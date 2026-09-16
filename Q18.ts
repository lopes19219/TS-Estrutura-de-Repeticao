interface Produto {
    nome: string;
    quantidade: number;
}

function controlarEstoque(produtos: Produto[]): void {

    let zerados = 0;
    let abaixoDeCinco = 0;
    let regulares = 0;

    // O array original não é alterado, apenas é percorrido para classificar os produtos.
    for (const produto of produtos) {

        if (produto.quantidade === 0) {
            console.log(`${produto.nome}: Zerado`);
            zerados++;
        } else if (produto.quantidade < 5) {
            console.log(`${produto.nome}: Abaixo de 5 unidades`);
            abaixoDeCinco++;
        } else {
            console.log(`${produto.nome}: Regular`);
            regulares++;
        }
    }

    console.log("\nResumo");
    console.log(`Zerados: ${zerados}`);
    console.log(`Abaixo de 5: ${abaixoDeCinco}`);
    console.log(`Regulares: ${regulares}`);
}

const estoque: Produto[] = [
    { nome: "Caderno", quantidade: 0 },
    { nome: "Caneta", quantidade: 3 },
    { nome: "Lápis", quantidade: 10 },
    { nome: "Borracha", quantidade: 4 },
    { nome: "Régua", quantidade: 8 }
];

// Dados de teste
controlarEstoque(estoque);

/*
Registro das saídas

Caderno: Zerado
Caneta: Abaixo de 5 unidades
Lápis: Regular
Borracha: Abaixo de 5 unidades
Régua: Regular

Resumo
Zerados: 1
Abaixo de 5: 2
Regulares: 2

Comparação com as regras

- Caderno foi classificado como zerado.
- Caneta e Borracha ficaram na categoria abaixo de 5 unidades.
- Lápis e Régua foram classificados como regulares.
- O resumo final contabilizou corretamente cada categoria.
*/
