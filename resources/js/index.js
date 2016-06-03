angular.module('pipeApp',[])
.controller('dashboardController', ['$scope', '$http', '$q',
                                 function($scope, $http, $q) {
    $scope.test = "what the fuck";
    $scope.testHttp = function () {
        console.log('test http');
        $http({
            method: 'POST',
            url: 'http://localhost:4000/about',
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "access-control-allow-origin": " *"
            },
            data: JSON.stringify({
                formId: '1',
                start: '2',
                limit: '3',
            })
        }).success(function (data, status, headers, config) {
            console.log('success', data);

        }).
        error(function (data, status, headers, config) {
            console.log('error', data);
        });
    };
}]);