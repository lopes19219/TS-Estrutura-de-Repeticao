function calcularFatorial(n: number): string {

    // Valida se o número é inteiro, está entre 0 e 15 e trata 0! como caso especial.
    if (!Number.isInteger(n) || n < 0 || n > 15) {
        return `Valor ${n}: Entrada inválida.`;
    }

    if (n === 0) {
        return "0! = 1";
    }

    let fatorial = 1;

    for (let i = 1; i <= n; i++) {
        fatorial *= i;
    }

    return `${n}! = ${fatorial}`;
}

// Dados de teste
console.log(calcularFatorial(0));     // Caso especial
console.log(calcularFatorial(5));     // Valor válido
console.log(calcularFatorial(-2));    // Valor negativo
console.log(calcularFatorial(3.5));   // Valor fracionário
console.log(calcularFatorial(16));    // Acima do limite

/*
Registro das saídas

0! = 1
5! = 120
Valor -2: Entrada inválida.
Valor 3.5: Entrada inválida.
Valor 16: Entrada inválida.

Comparação com as regras

- 0! foi tratado corretamente como 1.
- 5! foi calculado corretamente como 120.
- -2 foi rejeitado por ser negativo.
- 3.5 foi rejeitado por não ser inteiro.
- 16 foi rejeitado por ultrapassar o limite máximo de 15.
*/
