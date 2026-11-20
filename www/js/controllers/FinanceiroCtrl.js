
app.controller('FinanceiroCtrl', function(
    $scope,
    $ionicPopup,
    $window,
    FinanceiroService
) {

    $scope.semestres =
        FinanceiroService.listarSemestres();

    $scope.semestreSelecionado = '2026.2';

    $scope.mensalidades =
        FinanceiroService.listar();

    $scope.copiarCodigo = function(codigo) {

        var campo = document.createElement('textarea');

        campo.value = codigo;
        document.body.appendChild(campo);

        campo.select();
        document.execCommand('copy');

        document.body.removeChild(campo);

        $ionicPopup.alert({
            title: 'Código copiado!',
            template: 'O código de barras foi copiado.'
        });

    };

});
