'use strict';

var app = angular.module('gulpApp', []);

var app = angular.module('gulpApp');

app.controller('mainCtrl', ["$scope", function ($scope) {
  var _this = this;

  console.log('HEY!!! mainCtrl!');

  $scope.alert = function () {
    alert('ALERT!');
    console.log('this:', _this);
  };
}]);