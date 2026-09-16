function classificarTriangulo(lado1: number, lado2: number, lado3: number): string {

    // Valida a desigualdade triangular antes de classificar o triângulo.
    if (
        lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
        lado1 + lado2 <= lado3 ||
        lado1 + lado3 <= lado2 ||
        lado2 + lado3 <= lado1
    ) {
        return "Não forma um triângulo";
    }

    if (lado1 === lado2 && lado2 === lado3) {
        return "Triângulo Equilátero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}

// Dados de teste
console.log("3, 3, 3 -> " + classificarTriangulo(3, 3, 3));
console.log("5, 5, 3 -> " + classificarTriangulo(5, 5, 3));
console.log("3, 4, 5 -> " + classificarTriangulo(3, 4, 5));
console.log("1, 2, 3 -> " + classificarTriangulo(1, 2, 3));
console.log("0, 4, 5 -> " + classificarTriangulo(0, 4, 5));

/*
Registro das saídas

3, 3, 3 -> Triângulo Equilátero
5, 5, 3 -> Triângulo Isósceles
3, 4, 5 -> Triângulo Escaleno
1, 2, 3 -> Não forma um triângulo
0, 4, 5 -> Não forma um triângulo

Comparação com as regras

- 3, 3, 3 possui os três lados iguais, formando um triângulo equilátero.
- 5, 5, 3 possui dois lados iguais, formando um triângulo isósceles.
- 3, 4, 5 possui todos os lados diferentes, formando um triângulo escaleno.
- 1, 2, 3 não atende à desigualdade triangular, por isso é inválido.
- 0, 4, 5 é inválido porque um dos lados é igual a zero.
*/
