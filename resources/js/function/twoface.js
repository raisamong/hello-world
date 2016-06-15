angular.module('twofaceModule', [])
.controller('TwofaceCtrl', [ '$scope',
                                function () {
     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];

}]);