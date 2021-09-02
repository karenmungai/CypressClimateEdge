### Climate Edge

## Cypress Github Integration 


### Steps to run the tests

**1. Install Visual Studio Code**

Code editor used for this project

**2. Download this project on your machine**

 Choose a location to store / save the folder "CypressClimateEdge"
 

**3. Load Visual Studio Editor on your machine and open the project**

CypressClimateEdge\cypress\integration
   
Open a terminal and enter the following command

> npm init -y

Followed by

> npm i cypress --save-dev

Followed by

> node_modules/.bin/cypress open

Cypress automation window, will load with a list of all the tests


**4.Run Tessts**
On the Cypress Automation Window

**To run one test**

Double click on any test.

**To run all the tests**

Open a terminal and enter the command

npx cypress run --record --key 62439596-1be3-42f8-8019-21570ad9047e

Followed by

cypress run --record --key 62439596-1be3-42f8-8019-21570ad9047e


this is going to run the tests in the terminal however they can also be accesed in the following link as well as see the results - passes and fails. Also the results of previous executions
Let me know if you have an issue accessing it

> https://dashboard.cypress.io/invitation/d2847fb8-417b-43b8-a778-9d7938e3567c


Click first record on the list, should be the latest run
It will display the status i.e how many tests passed and how many failed.
The tests that failed can be loaded and screenshot is captured of the failure

