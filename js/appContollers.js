
var controllers = {};

//Core Controller
controllers.CoreCtrl = ['$scope', function($scope, $resource, $http){
    $scope.title   = 'Behancio App';
    $scope.baseURL = 'http://www.behance.net/v2/';
    $scope.user    = 'enokmadrid';
    $scope.apiKey  = 'wXg9JwtvGepF60zwE9f0t20YN4TGKxYc';

/*
    console.log($http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?'));
*/

}];




//sample users controller
controllers.UsersController = function($scope, usersFactory){  //usersFactory is added to pull users from Factory
    $scope.users = [];

    init();

    function init(){
        $scope.users = usersFactory.getUsers();
    };

    $scope.addCustomer = function(){
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



app.controller(controllers);


// Core shared controller
/*
 app.controller('CtrlCore', ['$scope', function($scope){


 function getProjects(user, cb){
 var url = $scope.baseURL + 'users/' +  $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?';
 $.get(url, {}, function(res, code){
 cb(res.projects);
 }, 'JSONP');
 }

 $scope.init = function(){
 $http.jsonp($scope.baseURL + 'users/' + $scope.user + '/projects?api_key=' + $scope.apiKey + '&callback=?');
 };


 }]);
 */

