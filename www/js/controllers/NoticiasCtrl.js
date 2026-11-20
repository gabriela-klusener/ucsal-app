app.controller('NoticiasCtrl', function(
    $scope,
    $stateParams,
    NoticiasService
) {

    $scope.noticias = NoticiasService.listar();

    $scope.categoriaSelecionada = '';

    $scope.categorias = [
        'Todas',
        'Notícia',
        'Evento'
    ];

    var id = $stateParams.id;

    if (id) {
        $scope.noticiaAtual =
            NoticiasService.buscarPorId(id);
    }

});
