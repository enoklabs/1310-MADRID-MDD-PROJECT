
var controllers = angular.module('BehancioApp.controllers', []);

//Core Controller
controllers.controller('CoreCtrl', ['$scope', function($scope, $resource, $http){
    $scope.title   = 'Behancio App';
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user    = 'enokmadrid';
    $scope.apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';


        console.log($http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?'));


}]);

//controller for Projects Listing Page
controllers.controller('ProjectsCtrl', function($scope, PagedResult, $routeParams){
    var list = $routeParams.list;
    $scope.list = $routeParams.list;
});

//controller for Detail Page
controllers.controller('DetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.projectID = $routeParams.id;
}]);

//controller for Sign In Page
app.controller('SignInCtrl', ['$scope', function($scope){

}]);

//controller for Sign Up Page
app.controller('SignUpCtrl', ['$scope', function($scope){

}]);




// Core shared controller
/*
 app.controller('CtrlCore', ['$scope', function($scope){


 function getProjects(user, cb){
 var url = $scope.baseURL + 'users/' +  $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?';
 $.get(url, {}, function(res, code){
 cb(res.projects);
 }, 'JSONP');
 }

 $scope.init = function(){
 $http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?');
 };


 }]);
 */

