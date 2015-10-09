foodRatingApp.controller("UpdateController", function($scope) {
    var deploy = new Ionic.Deploy();

    // Update app code with new release from Ionic Deploy
    $scope.doUpdate = function() {
      deploy.update().then(function(res) {
        $scope.log = 'Ionic Deploy: Update Success! ' + res;
      }, function(err) {
        $scope.log = 'Ionic Deploy: Update error! ' + err;
      }, function(prog) {
        $scope.log = 'Ionic Deploy: Progress... ' + prog;
      });
    };

    // Check Ionic Deploy for new code
    $scope.checkForUpdates = function() {
      $scope.log = 'Ionic Deploy: Checking for updates';
      deploy.check().then(function(hasUpdate) {
        $scope.log ='Ionic Deploy: Update available: ' + hasUpdate;
        $scope.hasUpdate = hasUpdate;
      }, function(err) {
        $scope.log = 'Ionic Deploy: Unable to check for updates' + err;
      });
    }
});
