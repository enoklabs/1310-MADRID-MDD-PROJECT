// Core shared controller
app.controller('CtrlCore', ['$scope', function($scope){
    $scope.title = "Behancio App";
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user = 'enokmadrid';
    $scope.apiKey = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';


    function getProjects(user, cb){
        var url = $scope.baseURL + 'users/' +  $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?';
        $.get(url, {}, function(res, code){
            cb(res.projects);
        }, 'JSONP');
    }

}]);

/*
//App main controller
app.controller('mainController', function($scope, $http){
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user = 'enokmadrid';
    $scope.apiKey = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

    $scope.init = function(){

        $http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?');//.success(function(data){
            //console.log(data);
        //}).error(function(error){

       // });

    };
});
*/


var ctrls = angular.module('AppCore.controllers', []);

//controller for Projects Listing Page
ctrls.controller('ProjectsCtrl', function($scope, PagedResult, $routeParams){
    var list = $routeParams.list;
    $scope.list = $routeParams.list;
});

//controller for Detail Page
ctrls.controller('DetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.projectID = $routeParams.id;
}]);

//controller for Sign In Page
app.controller('SignInCtrl', ['$scope', function($scope){

}]);

//controller for Sign In Page
app.controller('SignUpCtrl', ['$scope', function($scope){

}]);


