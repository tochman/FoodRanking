

######Invite/share application
```
ionic share <email>
```

######Deploying using CLI
```
ionic upload --note "new version..." --deploy=production
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


