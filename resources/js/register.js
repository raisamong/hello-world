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

    var checkPassword = function () {
        if ($scope.password != $scope.passwordConf)
            return false;
        else
            return true;
    };

    var genResult = function (output) {
        //TODO : bug translate
        console.log(output);
        if (output.result == 0) {
            // register success
            $scope.registered = true;
            $scope.regResult = localize[$scope.$parent.lang]._register_result_success;
        }
        else if (output.result == 1) {
            //username exist
            $scope.registerFailed = true;
            $scope.regResult = localize[$scope.$parent.lang]._register_result_exist;
        }
        else if (output.result == 2) {
            //register failed
            $scope.registerFailed = true;
            $scope.regResult = localize[$scope.$parent.lang]._register_result_error;
        }
    };

    $scope.register = function () {
        console.log('register');
        if (checkPassword()){
            service.register(genUserInfo()).then(function (res) {
                genResult(res);
            });
        }
        else {
            console.log('password mismatch');
        }
    };

    $scope.back = function () {
        $scope.registered = false;
        $scope.registerFailed = false;
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