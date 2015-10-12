foodRatingApp.controller("ProductsController", function ($scope, $http, $cordovaBarcodeScanner, $ionicLoading) {

  $scope.clearElements = function () {
    $scope.productsList = null;
    $scope.error = null;
    $scope.showCard = false;
  };

  $scope.show = function (message) {
    $ionicLoading.show({
      template: message
    });
  };
  $scope.hide = function () {
    $ionicLoading.hide();
  };

  $scope.toggleCard = function () {
    if ($scope.showCard === true) {
      $scope.showCard = false;
    } else {
      $scope.showCard = true;
    }
  };

  $scope.clearElements();
  $scope.message = '';
  var search_ean = '';
  $scope.searchValue = search_ean;

  $scope.searchProduct = function (ean) {
    $scope.show('Searching for ' + ean);
    var url = 'https://floating-river-7141.herokuapp.com/api/v1/product_listing/' + parseInt(ean);
    //var url = 'http://localhost:9393/api/v1/product_listing/' + parseInt(ean);
    //var url = 'https://loveofbread.herokuapp.com/api/v1/product_listing/' + parseInt(ean);

    console.log(url);
    $http.get(url).then(function successCallback(response) {
      $scope.searchResult = response.data;
      $scope.toggleCard();
      $scope.hide();
    }, function errorCallback(response) {
      $scope.error = [{heading: "Error", description: "Could not load json data"}];
      $scope.hide();
      $scope.clearElements();
    });
  };


  $scope.scanBarcode = function () {
    $scope.show('Initiating scanner...');
    var promise = $cordovaBarcodeScanner.scan();
    promise.then(
      function (result) {
        $scope.show('Getting data...' + result.format);
        //console.log(result.text);
        //$scope.message = result.format + result.text;
        //search_ean = result.text.slice(0,-1);
        search_ean = result.text;
        $scope.searchValue = search_ean;
        $scope.searchProduct(search_ean);
      });

  };





});
