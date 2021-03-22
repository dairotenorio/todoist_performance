# Automation framework Wizeline Performance challenge exercises
    This document explains how to install and run the Performance automation project.
    The goal of this project is to automate a Performance test with Artillery.
 
 ## Initial set up
    Install node.js
    Installation of framework

## Versions
    It's recommended to use the versions listed below for the following packages to guarantee a correct functionality:
    - node version = 12.18.4
    - npm version  >= 6.14.5
    - faker >= 5.1.0
    - artillery >= 1.6.2

## Clone and update
    Clone the repository on GIT: https://github.com/dairotenorio/todoist_performance
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