angular.module('pipeApp',[
    "ui.router",
    "ui.bootstrap",
    "ngAnimate",
    "loginController"
])
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: './resources/html/login.html',
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: './resources/html/register.html'
        });
});
