//MAIN MODULE
var app = angular.module('BehancioApp', ['ngResource']);


//ROUTES CONFIGURATION
app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : 'views/main.html'
        })
        .when('/detail', {
            templateUrl : 'views/detail.html',
            controller  : 'DetailCtrl'
        })
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'UsersController'
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
});


//FACTORY SAMPLE
app.factory('usersFactory', function(){
    var factory = {};
    var users = [
        {name: 'Enok Madrid'     , url: 'EnokMadrid'},
        {name: 'Josh Rossi'      , url: 'joshrossi'},
        {name: 'Hubert Paderski' , url: 'creativehead'},
        {name: 'Devin Schoeffler', url: 'nautilus-d' }
    ];

    factory.getUsers = function(){

        //I can make the HTTP calls here
        console.log(users);

        return users;
    };


    return factory;
});

//FACTORY for BEHANCE SERVICES
app.factory('behanceData', function($http, $log){

    $scope.title   = 'Behancio App';
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user    = 'enokmadrid';
    $scope.apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

    return{
        getProjects: function(successcb){

            $http({method: 'GET', url: 'http://www.behance.net/v2/users/enokmadrid/projects?api_key=wXg9JwtvGepF60zwE9f0t20YN4TGKxYc&callback=?'}).
                success(function(data){
                    successcb(data);
            }).
            error(function (data){
                $log.warn(data);
            });
        }

    };
});