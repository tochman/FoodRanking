foodRatingApp.controller("ProductsController", function ($scope, $http, $filter) {
  $scope.productsList = null;
  $scope.error = null;
  $scope.showCard = false;
  $scope.searchProduct = function (ean) {
	var url = 'https://floating-river-7141.herokuapp.com/api/v1/product_listing/' + parseInt(ean);
	//var url = 'http://localhost:9393/api/v1/product_listing/' + parseInt(ean);
	console.log(url)
	$scope.api_url = url;
	$http.get(url).then(function successCallback(response) {
		$scope.searchResult = response.data;
		$scope.showCard = true;
  }, function errorCallback(response) {
   	 	$scope.error = [{heading: "Error", description: "Could not load json data"}];
  });
    console.log($scope.searchResult);
  
  }

  $scope.toggleCard = function() {
    if ($scope.showCard === true) {
      $scope.showCard = false;
    } else {
      $scope.showCard = true;
    }
  };

});
