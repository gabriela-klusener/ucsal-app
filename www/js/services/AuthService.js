
app.service('AuthService', function(AlunoService) {

    var alunoLogado = null;
    var usuarios = [
        {
            matricula: '20261001',
            senha: '123456'
        }
    ];

    this.login = function(matricula, senha) {

        var usuario = usuarios.find(function(item) {
            return item.matricula === matricula &&
                   item.senha === senha;
        });

        if (usuario) {

            alunoLogado =
                AlunoService.buscarPorMatricula(matricula);

            return alunoLogado;
        }

        return null;
    };

    this.getAlunoLogado = function() {
        return alunoLogado;
    };

    this.logout = function() {
        alunoLogado = null;
    };

});
