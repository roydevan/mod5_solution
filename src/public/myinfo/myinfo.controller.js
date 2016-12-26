(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService','ApiPath'];
function MyInfoController(MenuService,ApiPath) {
  var myinfo = this;
  myinfo.basePath = ApiPath;

  myinfo.items = MenuService.getItem ();

}

})();
