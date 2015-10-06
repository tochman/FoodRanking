foodRatingApp.controller("ProductsController", function ($scope, $http, $filter) {
  $scope.productsList = null;
  $scope.error = null;
  $scope.showCard = false;

  $http.get('./data/products.json')
    .success(function (data) {
      $scope.productsList = data;
    })
    .error(function (data, status, error, config) {
      $scope.error = [{heading: "Error", description: "Could not load json data"}];
    });


  $scope.searchProduct = function (name) {
    var found = $filter('filter')($scope.productsList, {ean: name}, true);
    if (found.length) {
      $scope.searchResult = found[0];
      $scope.showCard = true;
    } else {
      $scope.searchResult = 'Not found';
    }
  }


  $scope.toggleCard = function() {
    if ($scope.showCard === true) {
      $scope.showCard = false;
    } else {
      $scope.showCard = true;
    }
  };


});
