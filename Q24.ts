function gerarMapaAssentos(reservados: string[]): void {

    // Os laços aninhados percorrem as filas (A a E) e os assentos (1 a 6).
    for (let fila = 0; fila < 5; fila++) {

        let linha = "";
        let letra = String.fromCharCode(65 + fila);

        for (let assento = 1; assento <= 6; assento++) {

            let codigo = letra + assento;

            if (reservados.includes(codigo)) {
                linha += `${codigo}[R] `;
            } else {
                linha += `${codigo}[L] `;
            }
        }

        console.log(linha);
    }
}

// Dados de teste
const assentosReservados = ["A2", "B5", "C3", "D1", "E6"];
gerarMapaAssentos(assentosReservados);

/*
Registro das saídas

A1[L] A2[R] A3[L] A4[L] A5[L] A6[L]
B1[L] B2[L] B3[L] B4[L] B5[R] B6[L]
C1[L] C2[L] C3[R] C4[L] C5[L] C6[L]
D1[R] D2[L] D3[L] D4[L] D5[L] D6[L]
E1[L] E2[L] E3[L] E4[L] E5[L] E6[R]

Comparação com as regras

- O mapa foi criado das filas A até E.
- Cada fila possui seis assentos, de 1 a 6.
- Os assentos presentes na lista foram marcados como reservados [R].
- Os demais foram marcados como livres [L].
*/
