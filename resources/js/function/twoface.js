angular.module('twofaceModule', [])
.controller('TwofaceCtrl', ['$scope',
                            function ($scope) {
    $scope.info = {};
    $scope.test = function () {
        console.log('eeee', $scope.info.date);
    }
}]);