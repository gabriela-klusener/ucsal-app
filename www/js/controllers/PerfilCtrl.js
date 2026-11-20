app.controller('PerfilCtrl', function(
    $scope,
    $rootScope,
    $ionicPopup,
    AlunoService
) {

    $scope.aluno = angular.copy(
        $rootScope.alunoLogado
    );

    $scope.salvar = function() {

        var alunoAtualizado =
            AlunoService.atualizar($scope.aluno);

        if (alunoAtualizado) {

            angular.copy(alunoAtualizado, $rootScope.alunoLogado);

            $ionicPopup.alert({
                title: 'Sucesso!',
                template: 'Seus dados foram atualizados.'
            });

        }

    };

});
