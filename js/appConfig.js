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
<<<<<<< HEAD
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'UsersCtrl'
        })
        .when('/profile', {
            templateUrl : 'views/profile.html',
            controller  : 'ProfileCtrl'
||||||| merged common ancestors
        .when('/projects', {
            templateUrl : 'views/projects.html',
            controller  : 'UsersController'
=======
        .when('/list', {
            templateUrl : 'views/list.html',
            controller  : 'UsersCtrl'
        })
        .when('/profile', {
            templateUrl : 'views/profile.html',
            controller  : 'ProfileCtrl'
>>>>>>> gh-pages
        })
        .when('/signin', {
            templateUrl : 'views/signin.html',
            controller  : 'SignInCtrl'
        })
        .when('/signup', {
            templateUrl : 'views/signup.html',
            controller  : 'SignUpCtrl'
        })
<<<<<<< HEAD
        .when('/test', {
            templateUrl : 'views/apiTest.html',
            controller  : 'BehanceCtrl'
        })
||||||| merged common ancestors
=======
        .when('/projects', {
            templateUrl : 'views/portfolios.html',
            controller  : 'BehanceCtrl'
        })
>>>>>>> gh-pages
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

<<<<<<< HEAD





||||||| merged common ancestors
=======



>>>>>>> gh-pages
//FACTORY for BEHANCE SERVICES
<<<<<<< HEAD
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
||||||| merged common ancestors
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
=======
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
>>>>>>> gh-pages

});