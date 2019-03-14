(function(){
    function NavigationController($scope, navService){
        $scope.currentPage = 'about';
        navService.onPageChanged(function(page){
            $scope.currentPage = page;
        });
    }

    angular.module('repairApp')
        .component('navigation', {
            templateUrl: 'js/components/navigation/navigation.html',
            controller: ['$scope','navService',NavigationController]
        });
})();