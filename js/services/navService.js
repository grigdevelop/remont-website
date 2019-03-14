(function(){
    angular.module('repairApp.services')
    .factory('navService', function(){
        var service = {};
        service.handler = function(page){
            console.log('Navigated to ' + page);
        };

        service.onPageChanged = function(handler){
            service.handler = handler;
        };

        service.setPage = function(page){
            service.handler(page);
        };

        return service;
    })
})();