var app = angular.module('BehancioApp',
        [
            'ngResource',
            'AppCore.controllers'
        ])
    .config(['$routeProvider', function(routes){

        routes
            .when('/',{
                templateUrl : 'views/main.html'
            })
            .when('/detail', {
                templateUrl : 'views/detail.html',
                controller  : 'DetailCtrl'
            })
            .when('/projects', {
                templateUrl : 'views/projects.html',
                controller  : 'CoreCtrl'
            })
            .when('/signin', {
                templateUrl : 'views/signin.tpl',
                controller  : 'SignInCtrl'
            })
            .when('/signup', {
                templateUrl : 'views/signup.tpl',
                controller  : 'SignUpCtrl'
            })
            .otherwise({
                redirectTo  : '/'
            })
    }]);


//version one
/*
app.controller('SimpleController', function($scope){
    $scope.customers = [
        {name: 'John Smith', city: 'Phoenix'},
        {name: 'Sean Doe'  , city: 'New York'},
        {name: 'Jane Doe'  , city: 'San Francisco'}
    ];
});
*/


//version two
/*
var controllers = {};
controllers.SimpleController = function($scope){
    $scope.customers = [
        {name: 'John Smith', city: 'Phoenix'},
        {name: 'Sean Doe'  , city: 'New York'},
        {name: 'Jane Doe'  , city: 'San Francisco'}
    ];
};

controllers.SimpleController2 = function($scope){
    //code
};

*/

