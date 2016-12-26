(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService'];
function SignupController(MenuService) {
  var reg = this;


  reg.submit = function () {
    reg.error = false;
    reg.completed = false;
    var promise = MenuService.validateShortName (reg.user.menuShortName);
    promise.then(function (response) {
      reg.completed = true;
      MenuService.addItem(reg.user.firstName,
                          reg.user.lastName,
                          reg.user.email,
                          reg.user.phone,
                          reg.user.menuShortName,
                          response.name,
                          response.description
                        );
    })
    .catch(function (errorResponse) {
        reg.error = true;
      });
  };
}

})();
