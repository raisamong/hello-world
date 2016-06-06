angular.module('loginController', [])
.controller('LoginCtrl', ['$scope', '$http', '$q',
                        function($scope, $http, $q) {

    $scope.login = function (usernameValid, passwordValid) {
        console.log('login');
        if (usernameValid, passwordValid) {
            $http({
               method: 'POST',
               url: backend + 'login',
               headers: {
                   "Content-type": "application/json;charset=UTF-8",
                   "access-control-allow-origin": " *"
               },
               data: JSON.stringify({
                   username: $scope.username,
                   password: $scope.password
               })
            }).success(function (data, status, headers, config) {
               console.log('success', data);

            }).error(function (data, status, headers, config) {
               console.log('error', data);
            });
        }
    };
}]);