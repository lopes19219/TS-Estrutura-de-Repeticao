type CorSemaforo = "vermelho" | "amarelo" | "verde";

function controlarSemaforo(
    cor: CorSemaforo,
    haPedestre: boolean,
    sensorConsistente: boolean
): string {

    // Se o sensor estiver inconsistente, o sistema entra em modo de segurança.
    if (!sensorConsistente) {
        return "Modo de segurança: verificar o sensor.";
    }

    switch (cor) {
        case "vermelho":
            return "Vermelho: veículos param e pedestres podem atravessar.";

        case "amarelo":
            return "Amarelo: preparar a parada dos veículos.";

        case "verde":
            if (haPedestre) {
                return "Verde: pedestres aguardam.";
            } else {
                return "Verde: veículos seguem normalmente.";
            }
    }
}

// Dados de teste
console.log(controlarSemaforo("vermelho", true, true));
console.log(controlarSemaforo("amarelo", false, true));
console.log(controlarSemaforo("verde", true, true));
console.log(controlarSemaforo("verde", false, true));
console.log(controlarSemaforo("vermelho", true, false));

/*
Registro das saídas

Vermelho: veículos param e pedestres podem atravessar.
Amarelo: preparar a parada dos veículos.
Verde: pedestres aguardam.
Verde: veículos seguem normalmente.
Modo de segurança: verificar o sensor.

Comparação com as regras

- No vermelho, os veículos param e os pedestres podem atravessar.
- No amarelo, o sistema prepara a parada dos veículos.
- No verde com pedestre, os pedestres aguardam.
- No verde sem pedestre, os veículos seguem normalmente.
- Quando o sensor está inconsistente, o sistema entra em modo de segurança.
*/
