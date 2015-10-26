// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
//var foodRatingApp = angular.module('foodRatingApp', ['ionic', 'ionic.service.core','ionic.service.analytics',  'ngCordova', 'foodRatingApp.controllers']);
var foodRatingApp = angular.module('foodRatingApp', ['ionic', 'ionic.service.core', 'ngCordova', 'foodRatingApp.controllers']);

foodRatingApp.config(function($ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
})

  .run(function ($ionicPlatform) {

    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

      // setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "views/tabs.html"
      })

      .state('tab.main', {
        url: '/main',
        views: {
          'tab-main': {
            templateUrl: 'views/tab-main.html',
            controller: 'ProductsController'
          }
        }
      })

      .state('tab.about', {
        url: '/about',
        views: {
          'tab-about': {
            templateUrl: 'views/tab-about.html'
          }
        }
      })

      .state('tab.update', {
        url: '/update',
        views: {
          'tab-update': {
            templateUrl: 'views/tab-update.html',
            controller: 'UpdateController'
          }
        }
      });


    $urlRouterProvider.otherwise('/tab/main');

  });


foodRatingApp.constant('$ionicLoadingConfig', {
  template: 'Default Loading Template...'
});



