
# Steps to run an Angular application

1) clone repository using command (git clone https://github.com/yashshree-bhavsar/EHI-YASHSHREE.git)

2) go to EHI-Project folder

3) Download and install node from https://nodejs.org/en/

4) install npm using command -- (npm install)

5) install angular cli using command -- (npm install -g @angular/cli)

6) Run the project using command -- (ng serve)

7) open http://localhost:4200/#/ in browser

# Folder Structure of Application

i) src/app -- root Module of the application 

ii) src/app/contact-details -- Component which contains code related CRUD operations module

iii) src/app/contact-details/contact-details.component.css -- model of the page 

iv) src/app/contact-details/contact-details.component.html -- view of the page 

v) src/app/contact-details/contact-details.component.ts -- business logic related to page

vi) src/app/contact-details/contact-details.component.css -- css related to page

vii) src/app/directives/regex-validator.directive.ts -- contains Directive class which checks if the value in keypress event matches the respective regex or not..if not then calls event.preventDefault() on keypress event.

viii).angular-cli.json -- this file contains configuration of project

ix)package.json -- contains dependencies related to project

# build command
ng build --prod --aot

# EHIProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
