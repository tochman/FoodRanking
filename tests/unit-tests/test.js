describe('ProductsController', function () {


  var $scope, controller;
  //beforeEach(module('ui.router')); // hmm... not sure if I need this
  beforeEach(module('foodRatingApp'));

  beforeEach(inject(function ($rootScope,
                              $controller,
                              $state) {

    $scope = $rootScope.$new();

    controller = $controller('ProductsController', {
      $scope: $scope,
      $state: $state

    });
  }));


  describe('Products Controller', function () {
    it('should have a $scope variable', function () {
      expect($scope).toBeDefined();
    });

    it('Product List is empty', function () {
      expect($scope.searchResult).toBe('');
    });
  });



});
