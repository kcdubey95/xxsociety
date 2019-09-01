var app =  angular.module('main-App',['ngRoute','angularUtils.directives.dirPagination']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('home');
      $stateProvider
        .state('/home', {
          url: '/home',
          templateUrl: 'templates/home.html',
          controller: 'AdminController'
        })
    
    
    .state('/Welcome/test', {
        url: '/Welcome/test',
        templateUrl: 'templates/items.html',
        controller: 'ItemController'
      });
  
      
  }])