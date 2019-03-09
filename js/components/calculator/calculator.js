(function(){
    function CalculatorController($scope){
        $scope.calcData = {
            placeType: '0',
            repairType: '0',
            square: 0,
            wallsCount: 0
        };               
        
        $scope.onClick = function(){
            console.log($scope.calcData);
        };
    }

    angular.module('repairApp')
        .component('calculator', {
            templateUrl: 'js/components/calculator/calculator.html',
            controller: ['$scope', CalculatorController]
        });
})();