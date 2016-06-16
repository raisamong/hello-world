angular.module('settingModule', [])
.controller('SettingCtrl', ['$scope',
                            function ($scope) {
    $scope.percent = 0;
    $scope.click = function () {
        $scope.percent = 100;
    }
}]);