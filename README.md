# EHI-YASHSHREE

# 1) install npm in EHI-Project folder using command -- (npm install)

# 2) Run the project using command -- (ng serve)

# 3) open http://localhost:4200/#/ in browser

# Folder Structure of Application

i) src/app -- root Module of the application
ii) src/app/contact-details -- Component which contains code related CRUD operations module

iii) src/app/contact-details/contact-details.component.css -- model of the  page
iv) src/app/contact-details/contact-details.component.html -- view of the page
v) src/app/contact-details/contact-details.component.ts -- business logic related to page
vi) src/app/contact-details/contact-details.component.css -- css related to page

vii) src/app/directives/regex-validator.directive.ts --  contains Directive class which checks if the value in keypress event matches the respective regex or not..if not then calls event.preventDefault() on keypress event.

viii).angular-cli.json -- this file contains configuration of project

ix)package.json -- contains dependencies related to project

# build command

ng build --prod --aot
