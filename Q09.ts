function calcularMedia(nota1: number, nota2: number, nota3: number): string {

    // Todas as notas são validadas antes do cálculo da média.
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

// Dados de teste
console.log(calcularMedia(7, 7, 7));
console.log(calcularMedia(5, 5, 5));
console.log(calcularMedia(4.9, 5, 5));
console.log(calcularMedia(10, 10, 11));

/*
Registro das saídas

Média: 7.0 - Aprovado
Média: 5.0 - Recuperação
Média: 5.0 - Recuperação
Notas inválidas

Comparação com as regras

- Média 7,0 aprova o aluno.
- Média 5,0 encaminha para recuperação.
- As notas 4,9, 5 e 5 geram média próxima do limite e permanecem na recuperação.
- A nota 11 é inválida por estar fora do intervalo de 0 a 10.
*/
