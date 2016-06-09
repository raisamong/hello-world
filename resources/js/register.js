angular.module('registerModule', [])
.controller('RegisterCtrl', [ '$scope', 'registerService',
                            function ($scope, registerService) {
    // TODO add tooltips
    // <!-- variables defined -->
    var service = new registerService();
    // <!-- end variables defined -->

    // <!-- $scopes defined -->
    $scope.viewMain = true;
    // end $scopes defined -->

    // <!-- variables function defined -->
    var genUserInfo = function () {
        var info = {
            username : $scope.username,
            password : $scope.password,
            email : $scope.email
        };
        return info;
    };

    var checkPassword = function () {
        if (!$scope.password || !$scope.passwordConf) {
            return 1;
        }
        else if ($scope.password.length < 8 || $scope.passwordConf.length < 8) {
            return 1;
        }
        else if ($scope.password.length > 12 || $scope.passwordConf.length > 12) {
            return 1;
        }
        else if ($scope.password != $scope.passwordConf) {
            return 1;
        }
        else {
            return 0;
        }
    };

    var genResult = function (output) {
        console.log(output);
        toggleView();
        if (output.result == 0) {
            // register success
            $scope.regResult = 0;
        }
        else if (output.result == 1) {
            //username exist
            $scope.regResult = 1;
        }
        else if (output.result == 2) {
            //register failed
            $scope.regResult = 2;
        }
    };
    // <!-- end variables defined -->

    // <!-- $scopes function defined -->
    $scope.register = function () {
        console.log('register');
        if (!checkPassword()){
            service.register(genUserInfo()).then(function (res) {
                genResult(res);
            });
        }
        else {
            console.log('password mismatch');
        }
    };

    $scope.toggleView = function () {
        $scope.viewMain = !$scope.viewMain;
    };
    // <!-- end $scopes function defined -->
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