//All controllers will be added to this empty object
var controllers = {};

//Core Controller
controllers.CoreCtrl = ['$scope', function($scope, $resource, $http){
    $scope.title   = 'Behancio App';
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user    = 'enokmadrid';
    $scope.apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';
<<<<<<< HEAD

/*console.log($http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?'));*/
||||||| merged common ancestors

/*
    console.log($http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?'));
*/

=======
>>>>>>> gh-pages
}];


<<<<<<< HEAD

//usersFactory is added to pull users from Factory
controllers.UsersCtrl = function($scope, usersFactory){
||||||| merged common ancestors


//sample users controller
controllers.UsersController = function($scope, usersFactory){  //usersFactory is added to pull users from Factory
=======
//usersFactory is added to pull users from Factory
controllers.UsersCtrl = function($scope, usersFactory){
>>>>>>> gh-pages
    $scope.users = [];

    //initialize function
    init();

    //all other functions go inside this initialization function
    function init(){
        $scope.users = usersFactory.getUsers();
        //more functions can go here
    };

    //addUser() pushes the new user info into the users object array
    $scope.addUser = function(){
        $scope.users.push(
            {
                name: $scope.newUser.name,
                url: $scope.newUser.url
            });
    };
};



//controller to get behance data
<<<<<<< HEAD
controllers.BehanceCtrl = function($scope, behanceData){

    //myCallbacFunction with jsonp method
    behanceData.myCallbackFunction(function(projects){
        $scope.projects = projects;
    });
};


||||||| merged common ancestors
controllers.BehanceController = function($scope, behanceData){
    behanceData.getProjects(function(project){
        $scope.projects = project;
    });
};


=======
controllers.BehanceCtrl = function($scope, behanceData){
>>>>>>> gh-pages

<<<<<<< HEAD
//controller for Projects Listing Page
controllers.ProjectsCtrl = function($scope, PagedResult, $routeParams){
    var list = $routeParams.list;
    $scope.list = $routeParams.list;
||||||| merged common ancestors


//controller for Projects Listing Page
controllers.ProjectsCtrl = function($scope, PagedResult, $routeParams){
    var list = $routeParams.list;
    $scope.list = $routeParams.list;
=======
    //myCallbacFunction with jsonp method
    $scope.behance = behanceData.async();
>>>>>>> gh-pages
};


<<<<<<< HEAD

||||||| merged common ancestors


=======
>>>>>>> gh-pages
//controller for Detail Page
controllers.DetailCtrl = ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.projectID = $routeParams.id;
}];

//controller for Profile Page
controllers.ProfileCtrl = ['$scope', function($scope){

}];

//controller for Sign In Page
controllers.SignInCtrl = ['$scope', function($scope){

}];


//controller for Sign Up Page
controllers.SignUpCtrl = ['$scope', function($scope){

}];


//passes all the above controller's objects into the app's main controller
app.controller(controllers);
