function analisarNumeros(): void {

    let pares = 0;
    let impares = 0;
    let multiplosDeCinco = 0;

    // Cada contador é independente, então um número pode entrar em mais de uma categoria.
    for (let i = 1; i <= 50; i++) {

        if (i % 2 === 0) {
            pares++;
        } else {
            impares++;
        }

        if (i % 5 === 0) {
            multiplosDeCinco++;
        }
    }

    console.log(`Pares: ${pares}`);
    console.log(`Ímpares: ${impares}`);
    console.log(`Múltiplos de 5: ${multiplosDeCinco}`);
}

// Dados de teste
analisarNumeros();

/*
Registro das saídas

Pares: 25
Ímpares: 25
Múltiplos de 5: 10

Comparação com as regras

- Entre 1 e 50 existem 25 números pares.
- Entre 1 e 50 existem 25 números ímpares.
- Existem 10 múltiplos de 5 (5, 10, 15, ..., 50).
- Um número como 10 foi contado como par e também como múltiplo de 5.
*/
