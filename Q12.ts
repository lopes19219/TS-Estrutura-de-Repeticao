function contagemRegressiva(): void {

    // O laço termina quando chega ao zero, garantindo que ele apareça apenas uma vez.
    for (let i = 10; i >= 0; i--) {
        console.log(i);
    }

    console.log("Início do experimento!");
}

// Dados de teste
contagemRegressiva();

/*
Registro das saídas

10
9
8
7
6
5
4
3
2
1
0
Início do experimento!

Comparação com as regras

- A contagem começou em 10.
- O zero apareceu apenas uma vez.
- A mensagem "Início do experimento!" foi exibida somente após o término do laço.
*/
