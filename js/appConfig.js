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
            controller  : 'UsersCtrl'
        })
        .when('/profile', {
            templateUrl : 'views/profile.html',
            controller  : 'ProfileCtrl'
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
            controller  : 'BehanceCtrl'
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
app.factory('behanceData', function($http){

    var factory = {},
        baseURL = 'http://www.behance.net/v2/',
        user    = 'EnokMadrid',
        apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

    factory.myCallbackFunction = function(data){
        // returning from async callbacks is (generally) meaningless
        console.log(data);
        return data;
    }

    var url = baseURL + "users/" + user + "/projects?api_key=" + apiKey;
    $http.jsonp(url);

    return factory;

});