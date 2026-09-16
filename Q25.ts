function analisarEconomia(antes: number[], depois: number[]): void {

    let atingiramMeta = 0;

    // Se o consumo anterior for zero, a porcentagem não é calculada para evitar divisão por zero.
    for (let i = 0; i < antes.length; i++) {

        if (antes[i] === 0) {
            console.log(`Residência ${i + 1}: Cálculo inválido (consumo anterior igual a zero).`);
            continue;
        }

        let reducao = ((antes[i] - depois[i]) / antes[i]) * 100;

        console.log(`Residência ${i + 1}: ${reducao.toFixed(2)}% de redução.`);

        if (reducao >= 10) {
            atingiramMeta++;
        }
    }

    console.log(`Residências que atingiram a meta: ${atingiramMeta}`);
}

// Dados de teste (12 residências)
const antes = [100, 120, 90, 0, 150, 200, 80, 60, 110, 95, 130, 70];
const depois = [85, 118, 70, 20, 135, 170, 80, 50, 99, 90, 117, 60];

analisarEconomia(antes, depois);

/*
Registro das saídas

Residência 1: 15.00% de redução.
Residência 2: 1.67% de redução.
Residência 3: 22.22% de redução.
Residência 4: Cálculo inválido (consumo anterior igual a zero).
Residência 5: 10.00% de redução.
Residência 6: 15.00% de redução.
Residência 7: 0.00% de redução.
Residência 8: 16.67% de redução.
Residência 9: 10.00% de redução.
Residência 10: 5.26% de redução.
Residência 11: 10.00% de redução.
Residência 12: 14.29% de redução.
Residências que atingiram a meta: 8

Comparação com as regras

- A meta foi considerada quando a redução foi de pelo menos 10%.
- A residência 4 não teve o percentual calculado porque o consumo anterior era zero.
- O programa percorreu as 12 residências e contou corretamente as que atingiram a meta.
*/
