//Cooper test matris - males

//Cooper Test Results for Males (in meters)
//
//  Age	Excellent	Above Ave	Average	Below Ave	Poor
//Male 20-29	> 2800m	2400 - 2800m	2200 - 2399m	1600 - 2199m	< 1600m
//Males 30-39	> 2700m	2300 - 2700m	1900 - 2299m	1500 - 1999m	< 1500m
//Males 40-49	> 2500m	2100 - 2500m	1700 - 2099m	1400 - 1699m	< 1400m
//Males 50+	> 2400m	2000 - 2400m	1600 - 1999m	1300 - 1599m	< 1300m


Person.prototype.assessVO2MaxForMale = function (distance) {
  var age = this.age;
  switch (true) {
    case (age >= 20 && age < 29) :
      switch (true) {
        case (distance < 1600) :
          return 'Poor';
          break;
        case (distance >= 1600 && distance < 2199) :
          return 'Below average';
          break;
        case (distance >= 2200 && distance < 2399) :
          return 'Average';
          break;
        case (distance >= 2400 && distance < 2800) :
          return 'Above average';
          break;
        default:
          return 'Excellent'
      }
      break;

    case (age >= 30 && age < 39) :
      switch (true) {
        case (distance < 1500) :
          return 'Poor';
          break;
        case (distance >= 1500 && distance < 1999) :
          return 'Below average';
          break;
        case (distance >= 1999 && distance < 2299) :
          return 'Average';
          break;
        case (distance >= 2300 && distance < 2700) :
          return 'Above average';
          break;
        case (distance > 2700) :
          return 'Above average';
          break;
        default:
          return 'Excellent'
      }
      break;

    case (age >= 40 && age < 49) :
      return 'upper middle age';
      break;

    default:
      return 'old';
  }
};
