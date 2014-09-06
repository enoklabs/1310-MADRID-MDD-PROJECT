'use strict';

var directives = angular.module('AppCore.directives', []);

directives.directive('ProjectsList', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: "views/list.html",
    scope: {
      projects: "=ProjectsList"
    }
  }
});
