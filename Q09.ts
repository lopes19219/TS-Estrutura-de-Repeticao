function calcularMedia(nota1: number, nota2: number, nota3: number): string {

    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {
        return "Notas inválidas";
    }

    const media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        return `Média: ${media.toFixed(1)} - Aprovado`;
    } else if (media >= 5) {
        return `Média: ${media.toFixed(1)} - Recuperação`;
    } else {
        return `Média: ${media.toFixed(1)} - Reprovado`;
    }
}

// Entradas de fronteira
console.log(calcularMedia(7, 7, 7));
console.log(calcularMedia(5, 5, 5));
console.log(calcularMedia(4.9, 5, 5));
console.log(calcularMedia(10, 10, 11));
