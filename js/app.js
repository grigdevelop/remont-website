(function(){
    var repairApp = angular.module('repairApp', ['ngRoute', 'repairApp.views']);
    angular.module('repairApp.views', []);

    
    repairApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
})();