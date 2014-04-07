#Anatomy of Rails App
```
.
├── Gemfile  			<----- SAME AS SINATRA	
├── Gemfile.lock		
├── README.rdoc			
├── Rakefile			<----- AVOID PUTTING RAKE TASK DEFS HERE
├── app					<----- the directory where most MVC logic lives
│   ├── assets			<----- precompiled front-end code lives (see note #1a)
│   │   ├── images		
│   │   │   └── rails.png			
│   │   ├── javascripts				
│   │   │   └── application.js	 <--- javascript manifest file (see note #1b)	
│   │   └── stylesheets				
│   │       └── application.css		<--- css manifest file (see note #1b)
│   ├── controllers						
│   │   └── application_controller.rb  <--- controller base class (see note #2a)	
│   ├── helpers							
│   │   └── application_helper.rb		<--- helper functions module base class 
│   ├── mailers						
│   ├── models						<--- SAME AS SINATRA
│   └── views						<--- SAME AS SINATRA
│       └── layouts					<--- but layout file(s) must go here.
│           └── application.html.erb  <--- new ERB filenames (see note #3)
├── config							<--- configuration files (see note #4a)
│   ├── application.rb
│   ├── boot.rb						
│   ├── database.yml				<--- where database configuration lives
│   ├── environment.rb				
│   ├── environments				
│   │   ├── development.rb			
│   │   ├── production.rb			
│   │   └── test.rb					
│   ├── initializers				
│   │   ├── backtrace_silencers.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   ├── secret_token.rb
│   │   ├── session_store.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   └── routes.rb 					<--- route-mapping goes here (see note #4b)
├── config.ru
├── db
│   └── seeds.rb 				<--- where rake db:seed logic is defined
├── doc
│   └── README_FOR_APP
├── lib
│   ├── assets
│   └── tasks 					<--- where rake tasks ARE defined
├── log
├── public						<--- same as Sinatra
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── favicon.ico
│   ├── index.html  			<-- default index.html file
│   └── robots.txt
├── script
│   └── rails
├──	test 						<--- alternative to RSpec (see note #5)
│   ├── fixtures
│   ├── functional
│   ├── integration
│   ├── performance
│   │   └── browsing_test.rb
│   ├── test_helper.rb
│   └── unit
├── tmp							
│   └── cache
│       └── assets
└── vendor
    ├── assets
    │   ├── javascripts
    │   └── stylesheets
    └── plugins

```

#Notes

##1. The Asset Pipeline

###A. The Assets Folder

The assets folder contains special versions of CSS, JavaScript and Image files.  These special versions can contain alternate, server-side code that's compiled before the final files are generated.  This is not unlike ERB does with HTML files.

###B. Manifest Files

The application.js and application.css files are called "manifest" files because they include a section at the top which is compiled by the server.  This section works much like a Gemfile and loads a series of other files.  In this case, the other files are all of the same type as the manifest file (JS or CSS, respectively) using a special, server-side syntax.

##2. The Application Controller

The Application Controller is the base class from which other controllers inherit.

```
class SomeOtherController < ApplicationController

end

class YetAnotherController < ApplicationController

end
```

##3. Views

Rails renders ERB templates just like Sinatra does.  However, filenames must now follow a different convention. Instead of ``somefile.erb`` the file must now be named ``somefile.html.erb``

##4. The Config Directory

###A. database.yml

This file is where your database login info is configured.  This is very similar to what you added to configure blocks in your environments.rb file in Sinatra.  By default, the database adaptor selected is SQLite3.  We won't really be using this, but it's one of the instances of Rails' opinionatedness.

###B. routes.rb

This file is where your HTTP routing logic is matched with controller methods.  This in some ways resembles the Sinatra bindings. 

But instead of:

```
get '/' do
	#something
end
```

It's now:

```
get '/' => 'home#index'
```

There are also a variety of rails helpers and methods available to us here that we'll be using soon.

##5. The Test Directory

By default, Rails installs TestUnit instead of RSpec.  We won't be using this, but it's yet another example of Rails' opinionatedness.

