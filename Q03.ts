function classificarTemperatura(temperatura: number): string {

    if (temperatura < -20 || temperatura > 100) {
        return "Leitura inválida";
    } else if (temperatura <= 29) {
        return "Normal";
    } else if (temperatura <= 39) {
        return "Atenção";
    } else {
        return "Crítico";
    }
}

console.log("-25 -> " + classificarTemperatura(-25));
console.log("20 -> " + classificarTemperatura(20));
console.log("30 -> " + classificarTemperatura(30));
console.log("40 -> " + classificarTemperatura(40));
console.log("101 -> " + classificarTemperatura(101));

/*
TESTE DE MESA

Temperatura: -25
- É menor que -20.
- Resultado: Leitura inválida.

Temperatura: 20
- Não é inválida.
- É menor ou igual a 29.
- Resultado: Normal.

Temperatura: 30
- Não é inválida.
- Não entra em Normal.
- É menor ou igual a 39.
- Resultado: Atenção.

Temperatura: 40
- Não é inválida.
- Não entra em Normal nem Atenção.
- Resultado: Crítico.

Temperatura: 101
- É maior que 100.
- Resultado: Leitura inválida.

 Saída: 

 -25 -> Leitura inválida
20 -> Normal
30 -> Atenção
40 -> Crítico
101 -> Leitura inválida */
