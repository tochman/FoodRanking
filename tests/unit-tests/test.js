describe('ProductsController', function () {


  var $scope, controller, httpBackend;

  beforeEach(module('foodRatingApp'));

  beforeEach(inject(function ($rootScope,
                              $controller,
                              $state,
                              $httpBackend,
                              $http) {

    $scope = $rootScope.$new();
    httpBackend = $httpBackend;
    var valid_respond = readJSON('mock/product.json');
    $httpBackend.whenGET(/.*/).respond(
      valid_respond
    );

    controller = $controller('ProductsController', {
      $scope: $scope,
      $state: $state,
      $http: $http

    });
  }));


  describe('Products Controller', function () {
    it('should have a $scope variable', function () {
      expect($scope).toBeDefined();
    });

    it('Product List is empty', function () {
      expect($scope.searchResult).toBe(null);
    });

    xit('should return api call', function (){
      httpBackend.flush();
      $scope.searchProduct('2222');
      expect($scope.searchResult).toBe('Fiberrost');

    });
  });

});
