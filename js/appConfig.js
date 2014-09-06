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
        .when('/list', {
            templateUrl : 'views/list.html',
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
        .when('/projects', {
            templateUrl : 'views/portfolios.html',
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
        {name: 'Devin Schoeffler', url: 'nautilus-d' },
        {name: 'Gregory Barbot'  , url: 'webs1' },
        {name: 'Sergey Azovskiy' , url: 'flexrs' },
        {name: 'Graphic Maniac'  , url: 'callmeoriginal' },
        {name: 'Degordian'       , url: 'degordian' }

    ];

    factory.getUsers = function(){

        //I can make the HTTP calls here
        console.log(users);
        return users;
    };

    return factory;
});




//FACTORY for BEHANCE SERVICES
app.factory('behanceData', function($http) {

    var factory = {

        async: function(page) {
            var user    = 'enokmadrid';
            var apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';
            var url     = 'http://behance.net/v2/users/'+ user +'/projects?api_key='+ apiKey +'&callback=JSON_CALLBACK';
            var promise = $http.jsonp(url).error(function (response, status) {
                alert(status);
            }).success(function (response, status) {
                //Success
            }).then(function (response, status) {
                return response.data;
            });
            return promise;
        }};
    return factory;

});