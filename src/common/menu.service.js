(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var myinfo = [];


  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };
  service.addItem = function (firstName,lastName,email,phone,menuShortName,menuName, menuDesc){
    myinfo = [];
    var myinfoArray = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      phone: phone,
      shortName : menuShortName,
      menuName : menuName,
      menuDesc : menuDesc
    };
    myinfo.push (myinfoArray);
  }
  service.getItem = function (){
     return myinfo;
  }
  service.validateShortName = function (menuShortName) {
    return $http.get(ApiPath + '/menu_items/' + menuShortName + '.json')
    .then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();
