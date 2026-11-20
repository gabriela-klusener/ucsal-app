app.controller('LoginCtrl', function(
    $scope,
    $state,
    $ionicPopup,
    $rootScope,
    AuthService
) {

    $scope.usuario = {
        matricula: '',
        senha: ''
    };

    $scope.entrar = function() {

        if (!$scope.usuario.matricula ||
            !$scope.usuario.senha) {

            $ionicPopup.alert({
                title: 'Atenção',
                template: 'Preencha todos os campos.'
            });

            return;
        }

        var aluno = AuthService.login(
            $scope.usuario.matricula,
            $scope.usuario.senha
        );

        if (aluno) {

            $rootScope.alunoLogado = aluno;

            $state.go('app.noticias');

        } else {

            $ionicPopup.alert({
                title: 'Login inválido',
                template: 'Matrícula ou senha incorreta.'
            });

        }

    };

});
