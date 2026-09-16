type Perfil = "aluno" | "professor" | "coordenador";

function controlarAcesso(perfil: string): string {
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

console.log(controlarAcesso("aluno"));
console.log(controlarAcesso("professor"));
console.log(controlarAcesso("coordenador"));
console.log(controlarAcesso("visitante")); 

/* Saída: 

Acesso liberado para a área do aluno.
Acesso liberado para a área do professor.
Acesso liberado para a área do coordenador.
Perfil desconhecido. Nenhuma permissão concedida. */
