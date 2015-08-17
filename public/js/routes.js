angular.module('adminui').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'client/templates/admin.ng.html',
      controller: 'adminCtrl'
    });
}]);
