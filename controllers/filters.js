'use strict';

var filters = angular.module('AppCore.filters', []);
filters.filter('AppCoreDate', function ($filter) {
  return function (datestr, format) {
    return $filter('date')(Date.parse(datestr) || datestr, format);
  }
});
