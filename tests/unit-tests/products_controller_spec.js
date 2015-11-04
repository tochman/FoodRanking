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
    var valid_response = readJSON('mock/product.json');
    httpBackend.whenGET(/.*/).respond(
      valid_response
    );

    controller = $controller('ProductsController', {
      $scope: $scope,
      $state: $state,
      $http: $http

    });
  }));


  describe('Products Controller', function () {

    it('should exist', function() {
      expect(controller).toBeDefined();
    });

    it('should have a $scope', function () {
      expect($scope).toBeDefined();
    });

    it('should have a #clearElements function', function () {
      expect(typeof $scope.clearElements).toBe("function");
    });

    it('should have a #showScan status', function () {
      expect(typeof $scope.showScan).toBe("boolean");
    });

    it('should have a #showCard status', function () {
      expect(typeof $scope.showCard).toBe("boolean");
    });

    it('should have a #searchResult object', function () {
      expect(typeof $scope.searchResult).toBe("object");
    });

    it('should have a #error object', function () {
      expect(typeof $scope.error).toBe("object");
    });


    //@xhr = ajax.create()
    //expect(typeof @xhr.open).toBe("function")

    //toHaveBeenCalled()

    describe('Controller is initialized', function () {
      it('Product List is empty', function () {
        expect($scope.searchResult).toBe(null);
      });

      it('showScan is set to false', function () {
        expect($scope.showScan).toBe(false);
      });

      it('showCard is set to false', function () {
        expect($scope.showCard).toBe(false);
      });

    });

    describe('#searchProduct', function () {
      it('should return product_name', function () {
        $scope.searchProduct('2222');
        httpBackend.flush();
        expect($scope.searchResult.product_name).toBe('Fiberrost');
      });

      it('should return image_url', function () {
        var url = "http://www.dabas.com/media/fazer-bageri/94515052_px2000.jpg"
        $scope.searchProduct('2222');
        httpBackend.flush();
        expect($scope.searchResult.image_url).toBe(url);
      });

    });

  });

});
