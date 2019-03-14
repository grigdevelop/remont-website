(function(){
    var repairApp = angular.module('repairApp', ['ngRoute', 'repairApp.views', 'repairApp.services']);
    angular.module('repairApp.views', []);
    angular.module('repairApp.services', []);

    
    repairApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
})();