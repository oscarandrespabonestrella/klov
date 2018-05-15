var app = angular.module('formApp', []);

  app.controller('MainCtrl', function ($scope) {
    $scope.formData = {};
    $scope.submitForm = function (formData) {
      alert('Form cadastrado com' + JSON.stringify(formData));
    };
  });

  app.controller('MainContato', function ($scope) {
    $scope.formData = {};
    $scope.submitForm = function (formData) {
      alert('Form cadastrado com' + JSON.stringify(formData));
    };
  });
