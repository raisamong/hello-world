angular.module('pipeApp',[])
.controller('dashboardController', ['$scope', '$http', '$q',
                                 function($scope, $http, $q) {
    $scope.test = "what the fuck";
    $scope.testHttp = function () {
        JSON.stringify([1, 'false', false]);
        console.log('test http');
        $http({
            method: 'GET',
            url: 'http://10.1.106.67:4000/',
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
            console.log('success');
        }).
        error(function (data, status, headers, config) {
            console.log('error', data);
        });
    };
}]);