# Automation framework Wizeline API challenge exercises
    This document explains how to install and run the API automation project.
    The goal of this project is to automate API test with POSTMAN.

    Notes: in case we want to run this project in a CI/CD and avoid risking the system using credential inside the code, we may want to implement something like this in the scripts of the CI/CD machine: 
        json -I -f environmentVariables.json -e "this.token='token_value'"
    -I -f activates in-place editing that writes updates to the input file
    -e executes the supplied expression on the input JSON object
 
 ## Initial set up
    Install node.js
    Installation of framework

## Versions
    It's recommended to use the versions listed below for the following packages to guarantee a correct functionality:
    - node version = 12.18.4
    - npm version  >= 6.14.5
    - newman >= 5.2.2
    - newman-reporter-htmlextra >= 1.20.1

## Clone and update
    Clone the repository on GIT: https://github.com/dairotenorio/todoist
    Update to the main branch and then run commands
 
**Install Dependencies**
    Install the dependencies (the node_modules) by running :
    `npm install`
    If you get vulnerability warnings, then run:
    `npm audit fix`

**Run the suite of tests**
    - For Mac: 		`test_mac`		

    Important Notes: If we get an error during the execution the report won't open automatically, in that case the command 
    `npm run report-mac` should be executed to see the error message