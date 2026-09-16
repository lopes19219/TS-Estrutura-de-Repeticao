function simularLogin(tentativas: boolean[]): void {

    let i = 0;
    let acesso = false;

    // O laço termina quando a senha é aceita ou quando as 3 tentativas acabam.
    while (i < 3 && i < tentativas.length && !acesso) {

        if (tentativas[i]) {
            console.log(`Tentativa ${i + 1}: Acesso permitido.`);
            acesso = true;
        } else {
            console.log(`Tentativa ${i + 1}: Senha incorreta.`);
        }

        i++;
    }

    if (!acesso) {
        console.log("Terminal bloqueado.");
    }
}

// Dados de teste
console.log("Cenário 1 - Sucesso");
simularLogin([false, true]);

console.log("Cenário 2 - Bloqueio");
simularLogin([false, false, false]);

/*
Registro das saídas

Cenário 1 - Sucesso
Tentativa 1: Senha incorreta.
Tentativa 2: Acesso permitido.

Cenário 2 - Bloqueio
Tentativa 1: Senha incorreta.
Tentativa 2: Senha incorreta.
Tentativa 3: Senha incorreta.
Terminal bloqueado.

Comparação com as regras

- No primeiro cenário, o laço encerrou antes da terceira tentativa porque o acesso foi permitido.
- No segundo cenário, as três tentativas foram consumidas e o terminal foi bloqueado.
*/
