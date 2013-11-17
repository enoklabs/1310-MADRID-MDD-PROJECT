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
        .when('/test', {
            templateUrl : 'views/apiTest.html',
            controller  : 'BehanceController'
        })
        .otherwise({
            redirectTo  : '/'
        })
});



//FACTORY SAMPLE for USERS
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
app.factory('behanceData', function($http, $log, $q){

    var factory = {},
        userProjects = [],
        baseURL = 'http://www.behance.net/v2/',
        user    = 'EnokMadrid',
        apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

    factory.getProjects = function(successcb){

        $http({method: 'GET', url: baseURL + 'users/' + user + '/projects?api_key=' + apiKey}).

            success(function(data){
                successcb(data);
                userProjects = data;
            }).
            error(function (data){
                $log.warn(data);
            });
        console.log(userProjects);
        return userProjects;
    };

    return factory;


/*  Alternative $http connection using the $q service

    return{
        get: function(){
            var dfd = $q.defer();
            $http.get('http://www.behance.net/v2/users/EnokMadrid/projects?api_key=wXg9JwtvGepF60zwE9f0t20YN4TGKxYc')
                .success(function(data){
                   dfd.resolve(data);
                    console.log(data);
                });
            return dfd.promise;
        }
    }
*/

});