var localize = { 'en' : en , 'th': th };

angular.module('pipeApp',[
    "ui.router",
    "ui.bootstrap",
    "ngSanitize",
    "ngAnimate",
    "pascalprecht.translate",
    "loginModule",
    "registerModule"
])
.config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $translateProvider.useLoader('langLoader', {});
    $translateProvider.preferredLanguage('th');
    $translateProvider.useSanitizeValueStrategy('sanitize');

    $urlRouterProvider.otherwise('/');
    $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: './resources/html/login.html',
            controller: 'LoginCtrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: './resources/html/register.html',
            controller: 'RegisterCtrl'
        });
})
.factory('langLoader', function($q) {
    return function (options) {
        console.log('langLoader', options);
        var deferred = $q.defer();
            deferred.resolve(localize.th);
        return deferred.promise;
    };
});
