

######Invite/share application
```
ionic share <email>
```

######Deploying using CLI
```
ionic upload --note "new version..." --deploy=production
```



#####Testing with Karma/Jasmine/PhantomJS
```
npm install karma --save-dev
npm install karma-jasmine --save-dev
bower install angular-mocks#1.3.13 --save-dev
npm install -g karma-cli
npm install -g phantomjs
```

```
mkdir -p tests/unit-tests
```

```
cd tests
karma init unit-tests.conf.js
```

Hit enter on every question to choose the default value, except for the following two questions.
```
Do you want to capture any browsers automatically ?  
Press tab to list possible options. Enter empty string to move to the next question.  
> PhantomJS
```



###Backend notes

include ActiveSupport in project
```
#Gemfile
gem 'activesupport'

#main controller
require 'active_support/all'
```

Extract brand name from API response:
```
str = "PÅGEN / PÅGEN AB" 

arr = str.mb_chars.downcase.strip.split('/')

#remove last space in brand and store in var
brand = arr[0].chop.titleize if arr[0].end_with? ' '
#remove first space in company name
company_name = arr[1].lstrip.titleize if arr[1][0] == ' '
```


