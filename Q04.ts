type Perfil = "aluno" | "professor" | "coordenador";

function controlarAcesso(perfil: string): string {

    // O default impede que um perfil desconhecido receba qualquer permissão.
    switch (perfil as Perfil) {
        case "aluno":
            return "Acesso liberado para a área do aluno.";

        case "professor":
            return "Acesso liberado para a área do professor.";

        case "coordenador":
            return "Acesso liberado para a área do coordenador.";

        default:
            return "Perfil desconhecido. Nenhuma permissão concedida.";
    }
}

// Dados de teste
console.log(controlarAcesso("aluno"));
console.log(controlarAcesso("professor"));
console.log(controlarAcesso("coordenador"));
console.log(controlarAcesso("visitante"));

/*
Registro das saídas

Acesso liberado para a área do aluno.
Acesso liberado para a área do professor.
Acesso liberado para a área do coordenador.
Perfil desconhecido. Nenhuma permissão concedida.

Comparação com as regras

- aluno recebeu acesso à área do aluno.
- professor recebeu acesso à área do professor.
- coordenador recebeu acesso à área do coordenador.
- visitante foi tratado como perfil desconhecido e não recebeu permissão.
*/
