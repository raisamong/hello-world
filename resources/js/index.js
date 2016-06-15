var localize = { 'en' : en , 'th': th };

angular.module('pipeApp',[
    "ui.router",
    "ui.bootstrap",
    "ngSanitize",
    "ngAnimate",
    "pascalprecht.translate",
    "loginModule",
    "registerModule",
    "dashboardModule",
    "settingModule",
    "twofaceModule"
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
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: './resources/html/dashboard.html',
            controller: 'DashboardCtrl'
        })
        .state('dashboard.setting', {
            url: '/setting',
            templateUrl: './resources/html/setting.html',
            controller: 'SettingCtrl'
        })
        .state('dashboard.twoface', {
            url: '/twoface',
            templateUrl: './resources/html/function/twoface.html',
        });
})
.controller('indexController', function ($scope, $translate) {
    $scope.langSelected = 'TH';
    $scope.lang = 'th';
    $scope.registered;
    $scope.changeLang = function (lang) {
        $translate.use(lang);
        $scope.lang = lang;
        $scope.langSelected =  lang.toUpperCase();
    };
})
.factory('langLoader', function($q) {
    return function (options) {
        console.log('langLoader', options);
        var deferred = $q.defer();
            if (options.key == "th")
                deferred.resolve(localize.th);
            else
                deferred.resolve(localize.en);
        return deferred.promise;
    };
})
.service('userService', function () {
    var user = {};
    this.setUser = function (info) {
        user.profile = info;
    };
    this.getUser = function () {
        return user;
    };
});
