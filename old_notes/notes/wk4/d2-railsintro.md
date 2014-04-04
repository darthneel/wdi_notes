# Rails

##Installation

Make sure that you install version 3.2

```
gem install rails -v 3.2
```

If you accidentally installed Rails 4, that's okay.  Try setting up a new gemset.  Here're the steps in the following URL:

[https://rvm.io/gemsets/creating](https://rvm.io/gemsets/creating)

##Anatomy of Rails App
```
.
├── Gemfile  			# 1. where the gem dependencies live.
├── Gemfile.lock		# 2. a file is generated after bundling
├── README.rdoc			# 3. the default documentation file
├── Rakefile			# 4. a rake task loader (DO NOT ADD RAKE TASKS HERE)
├── app					# 5. where core, backend MVC logic lives
│   ├── assets						# 6. where front-end source code live
│   │   ├── images					# 7. where images live.
│   │   │   └── rails.png			# 8. a default rails image.
│   │   ├── javascripts				# 9. where javascript files live.
│   │   │   └── application.js		# 10. default javascript manifest file
│   │   └── stylesheets				# 11. where stylesheets live
│   │       └── application.css		# 12. default css manifest file
│   ├── controllers						# 13. where controller logic lives
│   │   └── application_controller.rb	# 14. the base application controller 
│   ├── helpers							# 15. where additional helper scripts live
│   │   └── application_helper.rb		# 16. default helper script module
│   ├── mailers						# 17. where mailer logic lives
│   ├── models						# 18. where models live
│   └── views						# 19. where views live
│       └── layouts					# 20. where layouts live
│           └── application.html.erb	# 21. default layout file
├── config							# 22. where configuration files live
│   ├── application.rb				# 23. main application configuration logic
│   ├── boot.rb						# 24. code that must load before all other code.
│   ├── database.yml				# 25. where database configuration logic lives
│   ├── environment.rb				# 26. from whence the rails app is started.
│   ├── environments				# 27. where environment-specific logic lives
│   │   ├── development.rb			# 28. development-env-only config
│   │   ├── production.rb			# 29. production-env-only config
│   │   └── test.rb					# 30. test-env-only config
│   ├── initializers				# 31. 
│   │   ├── backtrace_silencers.rb
│   │   ├── inflections.rb
│   │   ├── mime_types.rb
│   │   ├── secret_token.rb
│   │   ├── session_store.rb
│   │   └── wrap_parameters.rb
│   ├── locales
│   │   └── en.yml
│   └── routes.rb
├── config.ru
├── db
│   └── seeds.rb
├── doc
│   └── README_FOR_APP
├── lib
│   ├── assets
│   └── tasks
├── log
├── public
│   ├── 404.html
│   ├── 422.html
│   ├── 500.html
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── script
│   └── rails
├── test
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

37 directories, 37 files

```