angular.module('pipeApp',[
    "ui.router",
    "ui.bootstrap",
    "ngAnimate"
])
.controller('dashboardController', ['$scope', '$http', '$q',
                                 function($scope, $http, $q) {
    String.prototype.hashCode = function() {
      var hash = 0, i, chr, len;
      if (this.length === 0) return hash;
      for (i = 0, len = this.length; i < len; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
      }
      return hash;
    };
    $scope.isCollapsed = true;
    $scope.test = "what the fuck";

    $scope.login = function () {
        console.log('test http');
        $http({
            method: 'POST',
            url: 'http://localhost:4000/login',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "access-control-allow-origin": " *"
            },
            data: JSON.stringify({
                email: $scope.email,
                password: $scope.password
            })
        }).success(function (data, status, headers, config) {
            console.log('success', data);
//            $scope.username = data.data[0].username;
//            $scope.email = data.data[0].email;
//            $scope.role = data.data[0].role;
        }).
        error(function (data, status, headers, config) {
            console.log('error', data);
        });
    };
}]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.
        state('login', {
            url: '/login',
            templateUrl: './resources/html/login.html'
        })
        .state('register', {
            url: '/register',
            templateUrl: './resources/html/register.html'
        });
});
