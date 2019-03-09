(function(){
    function AboutController(){
        
    }
    
    angular.module('repairApp.views')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/views/about/about.html',
            controller: 'AboutCtrl',
            activetab: 'about'
        });
    }])
    .controller('AboutCtrl', [AboutController]);
})();