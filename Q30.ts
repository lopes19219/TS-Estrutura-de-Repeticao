interface Sala {
    nome: string;
    turno: string;
    leituras: number[];
}

function classificarConsumo(media: number): string {

    // A classificação só acontece após validar todas as leituras da sala.
    if (media <= 20) {
        return "Baixo";
    } else if (media <= 30) {
        return "Médio";
    } else {
        return "Alto";
    }
}

function gerarRelatorio(salas: Sala[]): void {

    let maiorConsumo = -1;
    let salaMaiorConsumo = "";

    for (const sala of salas) {

        let total = 0;
        let valida = true;

        for (const leitura of sala.leituras) {

            if (leitura < 0) {
                valida = false;
                break;
            }

            total += leitura;
        }

        if (!valida) {
            console.log(`${sala.nome} (${sala.turno}) - Leituras inválidas.`);
            continue;
        }

        const media = total / sala.leituras.length;
        const classificacao = classificarConsumo(media);

        console.log(`${sala.nome} (${sala.turno})`);
        console.log(`Total: ${total} kWh`);
        console.log(`Média: ${media.toFixed(2)} kWh`);
        console.log(`Classificação: ${classificacao}\n`);

        if (total > maiorConsumo) {
            maiorConsumo = total;
            salaMaiorConsumo = sala.nome;
        }
    }

    console.log(`Sala de maior consumo: ${salaMaiorConsumo} (${maiorConsumo} kWh)`);
}

// Dados simulados
const salas: Sala[] = [
    {
        nome: "Sala A",
        turno: "Manhã",
        leituras: [18, 20, 19, 21, 22]
    },
    {
        nome: "Sala B",
        turno: "Tarde",
        leituras: [30, 32, 31, 29, 33]
    },
    {
        nome: "Sala C",
        turno: "Noite",
        leituras: [25, -2, 24, 23, 26]
    }
];

gerarRelatorio(salas);

/*
Registro das saídas

Sala A (Manhã)
Total: 100 kWh
Média: 20.00 kWh
Classificação: Baixo

Sala B (Tarde)
Total: 155 kWh
Média: 31.00 kWh
Classificação: Alto

Sala C (Noite) - Leituras inválidas.

Sala de maior consumo: Sala B (155 kWh)

Comparação com as regras

- Sala A teve todas as leituras válidas, total de 100 kWh e média de 20 kWh, sendo classificada como Baixo.
- Sala B teve todas as leituras válidas, total de 155 kWh e média de 31 kWh, sendo classificada como Alto.
- Sala C foi rejeitada por conter uma leitura negativa.
- A Sala B foi identificada corretamente como a de maior consumo.
*/
