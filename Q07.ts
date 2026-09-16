function anoBissexto(ano: number): string {

    // Primeiro verifica se o ano é divisível por 4 e não por 100.
    // Depois usa "OU" para incluir os anos divisíveis por 400.
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Bissexto";
    } else {
        return "Não é bissexto";
    }
}

// Dados de teste
console.log("1900 -> " + anoBissexto(1900));
console.log("2000 -> " + anoBissexto(2000));
console.log("2024 -> " + anoBissexto(2024));
console.log("2100 -> " + anoBissexto(2100));

/*
Registro das saídas

1900 -> Não é bissexto
2000 -> Bissexto
2024 -> Bissexto
2100 -> Não é bissexto

Comparação com as regras

- 1900 é divisível por 100, mas não por 400, então não é bissexto.
- 2000 é divisível por 400, então é bissexto.
- 2024 é divisível por 4 e não por 100, então é bissexto.
- 2100 é divisível por 100 e não por 400, então não é bissexto.
*/
