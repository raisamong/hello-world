//describe('activityFactory', function () {
//    var factory = {};
//    beforeEach(module('activityController'));
//    beforeEach(module(function ($provide) {
//        $provide.value('getFirebaseTime');
//    }));
//    var manager
//    it('can get an instance of my factory', inject(function(activityManager) {
//        manager = activityManager;
//        expect(manager).toBeDefined();
//    }));
//});
//
//describe('activityFactory', function (){
//    beforeEach(function(){
//        module('activityController', function ($provide){
//            $provide.value('getFirebaseTime');
//        });
//    });
//
//    it('can an instance of activityManager factory', function(){
//        var service = null;
//        inject(function (activityManager) {
//            service = activityManager;
//        });
//        var test = new service("eie","adad","eeee");
//        expect(test).toBeDefined();
//    });
//});
//
describe('Activity_Controller-Name_ActivityCtrl', function (){
    var $controller = null;
    var $scope = {};
    var service = null;
    beforeEach(function(){
        module('pipeApp');
    });

    beforeEach(function (){
        inject(function (_$controller_) {
            $controller = _$controller_;

        });
        service = $controller('dashboardController',
        {
            $scope : $scope,
        });
        console.log($scope);
    });
    it('adadad', function () {
        expect($scope.test).toBeDefined();
    });

});