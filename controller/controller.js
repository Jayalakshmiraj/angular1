var app = angular.module('angular',[]);
app.controller('homeCtrl',function($scope){
    $scope.name="Hello World";
    console.log($scope.name)
});