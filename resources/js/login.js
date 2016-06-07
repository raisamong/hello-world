angular.module('loginModule', [])
.controller('LoginCtrl', ['$scope', 'loginService',
                        function($scope, loginService) {
    var service = new loginService();
    var genUserInfo = function () {
        var info = {
            username : $scope.username,
            password : $scope.password
        };
        return info;
    }

    $scope.login = function () {
        console.log('login');
        service.login(genUserInfo()).then(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
}])
.factory('loginService', function ($http, $q) {
    return function (){
        var self = this;

        this.login = function (info) {
            var deferred = $q.defer();
                $http({
                   method: 'POST',
                   url: backend + 'login',
                   headers: {
                       "Content-type": "application/json;charset=UTF-8",
                       "access-control-allow-origin": " *"
                   },
                   data: JSON.stringify({
                       username: info.username,
                       password: info.password
                   })
                })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };
    }
});