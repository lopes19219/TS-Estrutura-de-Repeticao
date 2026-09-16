function verificarPrimo(numero: number): string {

    // A busca por divisores vai apenas até a raiz quadrada e para quando encontra um divisor.
    if (numero <= 1) {
        return "Número inválido";
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return `${numero} é composto.`;
        }
    }

    return `${numero} é primo.`;
}

// Dados de teste
console.log(verificarPrimo(7));
console.log(verificarPrimo(29));
console.log(verificarPrimo(12));
console.log(verificarPrimo(25));

/*
Registro das saídas

7 é primo.
29 é primo.
12 é composto.
25 é composto.

Comparação com as regras

- 7 não possui divisores além de 1 e dele mesmo, então é primo.
- 29 também é primo.
- 12 foi identificado como composto ao encontrar o divisor 2.
- 25 foi identificado como composto ao encontrar o divisor 5.
*/
