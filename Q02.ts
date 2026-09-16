interface Familia {
    rendaPorPessoa: number;
    cadastroAtivo: boolean;
    possuiIdoso: boolean;
}

function verificarBeneficio(familia: Familia): string {

    // A prioridade só é aplicada se a renda estiver até R$706 e o cadastro estiver ativo.
    if (familia.rendaPorPessoa <= 706 && familia.cadastroAtivo) {
        if (familia.possuiIdoso) {
            return "Elegível com prioridade";
        } else {
            return "Elegível";
        }
    } else {
        return "Não elegível";
    }
}

// Dados de teste
console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: true,
    possuiIdoso: true
}));

console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: true,
    possuiIdoso: false
}));

console.log(verificarBeneficio({
    rendaPorPessoa: 800,
    cadastroAtivo: true,
    possuiIdoso: true
}));

console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: false,
    possuiIdoso: true
}));

/*
Registro das saídas

Elegível com prioridade
Elegível
Não elegível
Não elegível

Comparação com as regras

- Cenário 1: renda até R$706, cadastro ativo e idoso → Elegível com prioridade.
- Cenário 2: renda até R$706 e cadastro ativo → Elegível.
- Cenário 3: renda acima de R$706 → Não elegível.
- Cenário 4: cadastro inativo → Não elegível.
*/
