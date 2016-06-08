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

    var genResult = function (output) {
        console.log(output);
        if (output.result == 0) {
            // register success
            $scope.registered = true;
            $scope.regResult = 'Register Successfully';
        }
        else if (output.result == 1) {
            //username exist
            $scope.registerFailed = true;
            $scope.regResult = 'Username already exist';
        }
        else if (output.result == 2) {
            //register failed
            $scope.registerFailed = true;
            $scope.regResult = 'Register failed. Please try again'
        }
    };

    $scope.registerStatus =;

    $scope.register = function () {
        console.log('register');
        service.register(genUserInfo()).then(function (res) {
            genResult(res);
        });
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
                    deferred.resolve(data);
                });
            return deferred.promise;
        };
    };
});