angular.module('loginController', [])
.controller('LoginCtrl', ['$scope', '$http', '$q',
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
                   email: $scope.email,
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