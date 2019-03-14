(function(){
    function ServicesController(navService){
        navService.setPage('services');
    }
    
    angular.module('repairApp.views')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/services', {
            templateUrl: 'js/views/services/services.html',
            controller: 'ServicesCtrl',
            activetab: 'services'
        });
    }])
    .controller('ServicesCtrl', ['navService',ServicesController]);
})();