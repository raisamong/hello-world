angular.module('registerModule', [])
.controller('RegisterCtrl', [ '$scope', 'registerService',
                            function ($scope, registerService) {
    var service = new registerService();
    var genUserInfo = function () {
        var info = {
            username : $scope.username,
            password : $scope.password,
            email : $scope.email
        };
        return info;
    }

    $scope.register = function (usernameValid, passwordValid) {
        console.log('register');
        if (usernameValid && passwordValid) {
            service.register(genUserInfo()).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            // invalid username && password
        }
    }
}])
.factory('registerService', function ($http, $q) {
    return function () {
        var self = this;

        this.register = function (info) {
            var deferred = $q.defer();
                $http({
                    method: 'POST',
                    url: backend + 'register',
                    headers: {
                       "Content-type": "application/json;charset=UTF-8",
                       "access-control-allow-origin": " *"
                    },
                    data: {
                        username : info.username,
                        password : info.password,
                        email: info.email,
                    }
                })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error( function (data, status, headers, config) {
                    deferred.reject(data);
                });
            return deferred.promise;
        };
    };
});