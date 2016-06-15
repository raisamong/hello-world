angular.module('settingModule', [])
.controller('SettingCtrl', ['$scope',
                            function ($scope) {
    $scope.percent = 40;
    $scope.click = function  () {
        $scope.percent += 10;
    }
}]);