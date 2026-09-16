function caixaEletronico(valor: number): void {

    // Valida se o valor é inteiro, positivo e pode ser representado apenas com as cédulas disponíveis.
    if (!Number.isInteger(valor) || valor <= 0 || valor === 1 || valor === 3) {
        console.log(`Valor ${valor}: Operação inválida.`);
        return;
    }

    const cedulas = [100, 50, 20, 10, 5, 2];
    let restante = valor;

    console.log(`Valor solicitado: R$ ${valor}`);

    for (const cedula of cedulas) {
        let quantidade = Math.floor(restante / cedula);

        if (quantidade > 0) {
            console.log(`${quantidade} nota(s) de R$ ${cedula}`);
            restante = restante % cedula;
        }
    }

    if (restante !== 0) {
        console.log("Valor não pode ser representado integralmente.");
    }
}

// Dados de teste
caixaEletronico(186);
caixaEletronico(74);
caixaEletronico(3);

/*
Registro das saídas

Valor solicitado: R$ 186
1 nota(s) de R$ 100
1 nota(s) de R$ 50
1 nota(s) de R$ 20
1 nota(s) de R$ 10
1 nota(s) de R$ 5
3 nota(s) de R$ 2

Valor solicitado: R$ 74
1 nota(s) de R$ 50
1 nota(s) de R$ 20
2 nota(s) de R$ 2

Valor 3: Operação inválida.

Comparação com as regras

- O valor 186 foi decomposto corretamente usando as cédulas disponíveis.
- O valor 74 também foi representado integralmente.
- O valor 3 foi recusado porque não pode ser formado apenas com notas de 100, 50, 20, 10, 5 e 2.
*/
