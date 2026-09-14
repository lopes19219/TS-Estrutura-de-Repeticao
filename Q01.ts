function classificarConsumo(consumo: number): string {
    if (consumo < 0) {
        return "Valor inválido";
    } else if (consumo <= 100) {
        return "Até 100 kWh";
    } else if (consumo <= 220) {
        return "101 a 220 kWh";
    } else {
        return "Acima de 220 kWh";
    }
}

console.log("0 -> " + classificarConsumo(0));
console.log("100 -> " + classificarConsumo(100));
console.log("101 -> " + classificarConsumo(101));
console.log("220 -> " + classificarConsumo(220));
console.log("221 -> " + classificarConsumo(221));

/* Saídas:
0 -> Até 100 kWh
100 -> Até 100 kWh
101 -> 101 a 220 kWh
220 -> 101 a 220 kWh
221 -> Acima de 220 kWh */
