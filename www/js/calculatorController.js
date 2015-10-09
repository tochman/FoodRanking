function Person(name, age, sex, weight, lenght) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.weight = weight;
  this.lenght = lenght;
}

Person.prototype.calculateBMI = function () {
  var weight = this.weight;
  var height = this.lenght;
  if (weight > 0 && height > 0) {
    var finalBmi = weight / (height / 100 * height / 100);
    this.bmi = finalBmi.toFixed(2);
    if (finalBmi < 18.5) {
      this.bmiMessage = "You are too thin."
    }
    if (finalBmi > 18.5 && finalBmi < 25) {
      this.bmiMessage = "You are healthy."
    }
    if (finalBmi > 25) {
      this.bmiMessage = "You have overweight."
    }
  }
};

Person.prototype.calculateVO2Max = function (distance) {
  //VO2max = (Distance covered in metres – 504.9) / 44.73
  var vo2Max = (parseFloat(distance) - 504.9) / 44.73;
  this.assessVO2Max(distance);
  this.vo2Max = vo2Max.toFixed(2);
  //this.vo2MaxMessage = vo2MaxMessage;
};

Person.prototype.assessVO2Max = function (distance) {

  if (this.sex.toLowerCase() == 'male') {
    this.vo2MaxMessage = this.assessVO2MaxForMale(distance);
  } else {
    this.vo2MaxMessage = this.assessVO2MaxForFemale(distance);
  }
};



//Cooper Test Results for Females (in meters)
//
//  Age	Excellent	Above Ave	Average	Below Ave	Poor
//Females 20-29	> 2700m	2200 - 2700m	1800 - 2199m	1500 - 1799m	< 1500m
//Females 30-39	> 2500m	2000 - 2500m	1700 - 1999m	1400 - 1699m	< 1400m
//Females 40-49	> 2300m	1900 - 2300m	1500 - 1899m	1200 - 1499m	< 1200m
//Females 50+	> 2200m	1700 - 2200m	1400 - 1699m	1100 - 1399m	< 1100m



function assessVO2MaxForFemale(obj, distance) {

}

foodRatingApp.controller("CalculatorController", function ($scope, $ionicModal) {
  var person = new Person('Thomas', 21, 'male', 82, 186);
  person.calculateBMI();
  //person.calculateVO2Max(2700);
  $scope.showCard = false;
  $scope.person = person;
  $scope.calcVO2Max = function (distance) {
    console.log('scope is ' + $scope.showCard);
    person.calculateVO2Max(distance);
    $scope.toggleCard();
  };

  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

  $scope.toggleCard = function() {
    if ($scope.showCard === true) {
      $scope.showCard = true;
      console.log('scope is ' + $scope.showCard);
    } else {
      $scope.showCard = true;
      console.log('scope is ' + $scope.showCard);
    }
  };

});
