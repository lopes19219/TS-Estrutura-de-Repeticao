function anoBissexto(ano: number): string {

    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Bissexto";
    } else {
        return "Não é bissexto";
    }
}

// Testes 
console.log("1900 -> " + anoBissexto(1900));
console.log("2000 -> " + anoBissexto(2000));
console.log("2024 -> " + anoBissexto(2024));
console.log("2100 -> " + anoBissexto(2100));

/* Saída: 

1900 -> Não é bissexto
2000 -> Bissexto
2024 -> Bissexto
2100 -> Não é bissexto */
