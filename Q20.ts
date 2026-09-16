function gerarFibonacci(n: number): void {

    // Valida se a quantidade de termos está entre 2 e 30.
    if (n < 2 || n > 30) {
        console.log(`Valor ${n}: Entrada inválida.`);
        return;
    }

    let anterior = 0;
    let atual = 1;

    console.log(`Fibonacci com ${n} termos:`);

    for (let i = 1; i <= n; i++) {
        console.log(anterior);

        let proximo = anterior + atual;
        anterior = atual;
        atual = proximo;
    }
}

// Dados de teste
gerarFibonacci(2);
gerarFibonacci(8);
gerarFibonacci(31);

/*
Registro das saídas

Fibonacci com 2 termos:
0
1

Fibonacci com 8 termos:
0
1
1
2
3
5
8
13

Valor 31: Entrada inválida.

Comparação com as regras

- n = 2 gerou os dois primeiros termos corretamente.
- n = 8 gerou os oito primeiros termos da sequência.
- n = 31 foi rejeitado por ultrapassar o limite máximo de 30.
*/
