angular.module('twofaceModule', [])
.controller('TwofaceCtrl', ['$scope', '$uibModal',
                            function ($scope, $uibModal) {
    $scope.info = {};
    $scope.test = function () {
        console.log('eeee', $scope.info.date);
    };
    $scope.info.contacts = [];
    $scope.addContact = function () {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '../resources/template/modal/twoface.add.contact.html',
            animation: true,
            controller: modalAddContactCtrl,
            size: 'md',
            resolve: {

            }
        });

        modalInstance.result.then(function (contact) {
            $scope.info.contacts.push(contact);
            console.log($scope.info);
        }, function (dismiss) {

        });

        function modalAddContactCtrl($scope, $uibModalInstance){
            $scope.ok = function () {
                var info = {
                    name: $scope.name,
                    position: $scope.position,
                    tel: $scope.tel,
                    email: $scope.email
                };
                console.log(info);
                $uibModalInstance.close(info);
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }
    };
}]);