(function(){
    function RepairController(){
        
    }
    
    angular.module('repairApp.views')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/repair', {
            templateUrl: 'js/views/repair/repair.view.html',
            controller: 'RepairCtrl',
            activetab: 'repair'
        });
    }])
    .controller('RepairCtrl', [RepairController]);
})();