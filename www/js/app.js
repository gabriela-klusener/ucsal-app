
var app = angular.module('ucsalApp', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
    })

    .state('app.noticias', {
        url: '/noticias',
        views: {
            'menuContent': {
                templateUrl: 'templates/noticias.html',
                controller: 'NoticiasCtrl'
            }
        }
    })

    .state('app.detalhe', {
        url: '/noticia/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/noticia-detalhe.html',
                controller: 'NoticiasCtrl'
            }
        }
    })

    .state('app.perfil', {
        url: '/perfil',
        views: {
            'menuContent': {
                templateUrl: 'templates/perfil.html',
                controller: 'PerfilCtrl'
            }
        }
    })

    .state('app.financeiro', {
        url: '/financeiro',
        views: {
            'menuContent': {
                templateUrl: 'templates/financeiro.html',
                controller: 'FinanceiroCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/login');

});

app.run(function($rootScope, $state, AuthService) {

    $rootScope.$on('$stateChangeStart',
        function(event, toState) {

            if (toState.name !== 'login' &&
                !AuthService.getAlunoLogado()) {

                event.preventDefault();
                $state.go('login');
            }
        }
    );

});


app.controller('MenuCtrl', function(
    $scope,
    $rootScope,
    $state,
    AuthService
) {

    // Encerra a sessão
    $scope.sair = function() {

        AuthService.logout();

        $rootScope.alunoLogado = null;

        $state.go('login');

    };

});

