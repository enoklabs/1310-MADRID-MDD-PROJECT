//All controllers will be added to this empty object
var controllers = {};

//Core Controller
controllers.CoreCtrl = ['$scope', function($scope, $resource, $http){
    $scope.title   = 'Behancio App';
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user    = 'enokmadrid';
    $scope.apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

/*console.log($http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?'));*/
}];



//usersFactory is added to pull users from Factory
controllers.UsersController = function($scope, usersFactory){
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
controllers.BehanceController = function($scope, behanceData){

    behanceData.getProjects(function(project){
        $scope.projects = project;
    });

/*
    Alternative $http connection using the $q service
    $scope.behanceData = behanceData.get();
*/

};



//controller for Projects Listing Page
controllers.ProjectsCtrl = function($scope, PagedResult, $routeParams){
    var list = $routeParams.list;
    $scope.list = $routeParams.list;
};



//controller for Detail Page
controllers.DetailCtrl = ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.projectID = $routeParams.id;
}];



//controller for Sign In Page
controllers.SignInCtrl = ['$scope', function($scope){

}];



//controller for Sign Up Page
controllers.SignUpCtrl = ['$scope', function($scope){

}];


//passes all the above controller's objects into the app's main controller
app.controller(controllers);
