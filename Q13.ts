function gerarTabuada(numero: number): void {

    // Valida se o número é inteiro e está entre 1 e 100.
    if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
        console.log(`Valor ${numero}: Entrada inválida.`);
        return;
    }

    console.log(`Tabuada do ${numero}`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Dados de teste
gerarTabuada(7);
gerarTabuada(0);
gerarTabuada(101);

/*
Registro das saídas

Tabuada do 7
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

Valor 0: Entrada inválida.
Valor 101: Entrada inválida.

Comparação com as regras

- O número 7 é inteiro e está entre 1 e 100, então a tabuada foi gerada do 1 ao 10.
- O número 0 foi rejeitado por estar abaixo do limite mínimo.
- O número 101 foi rejeitado por ultrapassar o limite máximo.
*/
