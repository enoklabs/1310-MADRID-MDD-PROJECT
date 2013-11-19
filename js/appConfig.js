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
            templateUrl : 'views/signin.html',
            controller  : 'SignInCtrl'
        })
        .when('/signup', {
            templateUrl : 'views/signup.html',
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


    // Alternative #1 using $resource
    factory.getProjects = function(sucesscb){
        $http({method: 'GET', url: 'js/data/data.json'}).
            success(function(data){
                sucesscb(data);
                userProjects = data;
            }).
            error(function(data){
                $log.warn(data);
            });
        console.log(userProjects);
        return userProjects;
    };

    return factory;


/*  Alternative #1 using $resource

    return {
        getProjects: function (){
            var deferred = $q.defer();
            $resource('/data/data/:id', {id:'@id'}).get({id:3882857})
                .get({id:3882857},
                function (projects){
                    deferred.resolve(projects);
                },
                function (response){
                    deferred.reject(response);
                });

            return deferred.promise;
        }
    };
*/



/*  Alternative #2 $http connection using the $q service

    return{
        get: function(){
            var deferred = $q.defer();
            $http.get('http://www.behance.net/v2/users/EnokMadrid/projects?api_key=wXg9JwtvGepF60zwE9f0t20YN4TGKxYc')
                .success(function(data){
                   deferred.resolve(data);
                    console.log(data);
                });
            return deferred.promise;
        }
    }
*/

});