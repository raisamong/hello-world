angular.module('dashboardModule', [])
.controller('DashboardCtrl', [ '$scope', '$state', 'userService',
                                function ($scope, $state, userService) {
//    var checkCurrentUser = function () {
//        var user = userService.getUser();
//        if (!user.profile) {
//            $state.go('login');
//        }
//    }
//
//    checkCurrentUser();
    $scope.functions = ['setting', 'twoface', 'unregcustomer'];
}])
.directive('functionItem', function () {
    return {
        restrict: 'E',
        templateUrl: './resources/html/directive/function.item.html',
        scope: {
            functions : '='
        },
        controller : function ($scope) {
            $scope.select = function (item) {
                $scope.selected = item;
            };
        }
    }
});
