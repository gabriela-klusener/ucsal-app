
app.service('AlunoService', function() {

    var alunos = [
        {
            matricula: '20261001',
            nome: 'Gabriela Klusener Fonseca',
            curso: 'Engenharia de Software',
            email: 'gabriela@email.com',
            telefone: '(71) 99999-1111',
            cep: '41720-000',
            rua: 'Rua das Flores',
            bairro: 'Pituba',
            cidade: 'Salvador'
        }
    ];

    this.buscarPorMatricula = function(matricula) {

        return alunos.find(function(aluno) {
            return aluno.matricula === matricula;
        });

    };

    this.atualizar = function(dados) {

        var aluno = this.buscarPorMatricula(dados.matricula);

        if (aluno) {
            aluno.email = dados.email;
            aluno.telefone = dados.telefone;
            aluno.cep = dados.cep;
            aluno.rua = dados.rua;
            aluno.bairro = dados.bairro;
            aluno.cidade = dados.cidade;
        }

        return aluno;
    };

});
