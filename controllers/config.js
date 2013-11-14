var app = angular.module('AppCore', [
        'AppCore.controllers'
    ]);

    app.config(['$routeProvider', function(r){

        // Routes
        r
            .when('/',{
                templateUrl : 'views/main.html'
            })
            .when('/detail', {
                templateUrl : 'views/detail.html',
                controller  : 'DetailCtrl'
            })
            .when('/listing', {
                templateUrl : 'views/listing.html',
                controller  : 'ProjectsCtrl'
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
    }])
