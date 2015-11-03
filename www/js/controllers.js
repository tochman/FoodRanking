angular.module('foodRatingApp.controllers', [])

  .controller("ProductsController", function ($scope, $state, $http, $cordovaBarcodeScanner, $ionicLoading) {
    $scope.showScan = true;

    $scope.clearElements = function () {
      $scope.searchResult = null;
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

    $scope.toggleScanUi = function () {

      if ($scope.showScan === true) {
        $scope.showScan = false;
      } else {
        $scope.showScan = true;
      }
      console.log('showScan status: ' + $scope.showScan);
      return $scope.showScan;
    }

    $scope.clearElements();
    $scope.message = '';
    var search_ean = '';
    $scope.searchValue = search_ean;

    $scope.searchProduct = function (ean) {
      $scope.show('Searching for ' + ean);
      //var url = 'https://floating-river-7141.herokuapp.com/api/v1/product_listing/' + parseInt(ean);
      //var url = 'http://localhost:9393/api/v1/product_listing/' + parseInt(ean);
      var url = 'https://loveofbread.herokuapp.com/api/v1/product_listing/' + parseInt(ean);

      //console.log(url);
      $http.get(url).then(function successCallback(response) {
        $scope.searchResult = response.data;
        console.log('searchResult status (controller): ' + $scope.searchResult);
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
  })


  .controller("UpdateController", function ($scope, $ionicLoading) {
    var deploy = new Ionic.Deploy();

    // Update app code with new release from Ionic Deploy
    $scope.doUpdate = function () {

      deploy.download().then(function () {
        $scope.show('Downloading update');
        deploy.extract().then(function () {
          deploy.load();
        }, function (error) {
          $scope.show('Error installing! ' + error);
        }, function (progress) {
          $scope.log = 'Installing ' + progress;
        });
      }, function (error) {
        $scope.show('Error downloading! ' + error);
      }, function (progress) {
        $scope.show('Downloading.. ' + progress);
      });

    };

    // Check Ionic Deploy for new code
    $scope.checkForUpdates = function () {
      $scope.show('Checking for updates');
      deploy.check().then(function (hasUpdate) {
        if (hasUpdate === true) {
          $scope.show('Update available.');
        } else {
          $scope.show('Latest version installed');
        }
        $scope.hasUpdate = hasUpdate;
      }, function (err) {
        $scope.show('Unable to check for updates' + err);
      });
    };


    $scope.show = function (message) {
      $ionicLoading.show({
        template: message,
        duration: 1500
      });
    };
    $scope.hide = function () {
      $ionicLoading.hide();
    };
  })

