'use strict';

var services = angular.module('AppCore.services', []);

services.factory('AppCore', function ($http) {
  function load (path, params) {
    params = params || {};
    params.callback = "JSON_CALLBACK";
    return $http.jsonp("http://www.behance.net/v2/" + path, {params: params});
  }
  return {
    detail: function (id) {
            var result = {};
            load ("/listing/" + id).then(function (data){
              angular.copy(data.data, result)
            });

            return result;
          },
    projects: function (type, params) {
             params = params || {};
             return load("/listing/" + type, params)
           }
  }
});

services.factory('PagedResult', function (behancio) {
  return function PagedResult (method, arg, collection_name) {
    var self = this;
    self.page = 0;
    var collection = this[collection_name] = [];

    this.loadNextPage = function () {
      behancio[method](arg, {page: self.page + 1}).then(function (data){
        self.page = data.data.page;
        self.pages = data.data.pages;
        self.per_page = data.data.per_page;
        [].push.apply(collection, data.data[collection_name])
      });

      return this;
    }
  }

});
