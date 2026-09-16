function classificarTemperatura(temperatura: number): string {

    // Valida leituras fora do intervalo permitido antes da classificação.
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

// Dados de teste
console.log("-25 -> " + classificarTemperatura(-25));
console.log("20 -> " + classificarTemperatura(20));
console.log("30 -> " + classificarTemperatura(30));
console.log("40 -> " + classificarTemperatura(40));
console.log("101 -> " + classificarTemperatura(101));

/*
Teste de mesa

Temperatura: -25
- Menor que -20.
- Resultado: Leitura inválida.

Temperatura: 20
- Está até 29.
- Resultado: Normal.

Temperatura: 30
- Está entre 30 e 39.
- Resultado: Atenção.

Temperatura: 40
- É maior ou igual a 40.
- Resultado: Crítico.

Temperatura: 101
- Maior que 100.
- Resultado: Leitura inválida.

Registro das saídas

-25 -> Leitura inválida
20 -> Normal
30 -> Atenção
40 -> Crítico
101 -> Leitura inválida

Comparação com as regras

- -25 foi rejeitado por estar abaixo de -20°C.
- 20 ficou na faixa Normal (até 29°C).
- 30 entrou na faixa Atenção (30 a 39°C).
- 40 entrou na faixa Crítico (40°C ou mais).
- 101 foi rejeitado por estar acima de 100°C.
*/
