interface Familia {
    rendaPorPessoa: number;
    cadastroAtivo: boolean;
    possuiIdoso: boolean;
}

function verificarBeneficio(familia: Familia): string {
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

// Cenário 1
console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: true,
    possuiIdoso: true
}));

// Cenário 2
console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: true,
    possuiIdoso: false
}));

// Cenário 3
console.log(verificarBeneficio({
    rendaPorPessoa: 800,
    cadastroAtivo: true,
    possuiIdoso: true
}));

// Cenário 4
console.log(verificarBeneficio({
    rendaPorPessoa: 500,
    cadastroAtivo: false,
    possuiIdoso: true
}));

/* Saída: 

Elegível com prioridade
Elegível
Não elegível
Não elegível */
