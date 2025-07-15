# Assignment Task for QA Automation Engineer

### Dependencies Required

Attribute | Plugin Link |
------------ | ------------- |
JSON Schema Assertion | https://github.com/kde-intro/jmeter-json-schema-assertion-plugin |

## Installation of Plugin
1. Copy the **Custom_JsonSchemaAssertion_component-0.4.jar** located at ./jmeter in assignment-qa project to your **JMeter** home directory/lib/ext/<br>


---------------------------------------------------------------OR--------------------------------------------------------------------------------
****
1. Clone the repo at:: https://github.com/kde-intro/jmeter-json-schema-assertion-plugin
2. Build extension - create _jar_ file by running Maven build _package_ (cli: _mvn package_).
3. Put the generated jar file (Custom_JsonSchemaAssertion_component.jar) from _target_ folder to JMeter _JMeter home directory/lib/ext/_ directory.

****
## Notes
## <span style="color:red">****\# Detail documentation and analysis is availale in the "./docx" folder of the project for all assignments****<br></span>

## Assignment Project Installation
1. Clone the repo:: https://github.com/pydrive50CS/assignment-qa

    ## 1.Run Selenium Tests
    ### <span style="color:green">**Assignment 1**<br></span>
    ### ****<br>
    1. Run the JAVA Selenium Test at:<br>
    src/test/java/com/saucedemo/tests/LoginTest.java
    2. The emailable HTML reports are found under the ./reports/login/ExtentReport.html
    #### \# Approach and analysis report of my assignment-1 can be found in the "./docx" directory

    ### <span style="color:green">**Assignment 2**<br></span>

    3.  Run the JAVA Selenium Test for at:<br>
        src/test/java/com/demoqa/tests/FormsValidationTest.java
    4. The emailable HTML reports are found under the ./reports/forms/ExtentReport.html
    #### \# Approach and analysis report of my assignment-2 can be found in the "./docx" directory

    ## 2.Run Jmeter Tests
    ### <span style="color:green">**Assignment 3**<br></span>

    ***\*Make sure you have the JSON Schema Assertion plugin\****<br>

    1. Then open the "assignment-3.jmx" file in the "./jmeter/assignment-3" directory of the project

    2. Next update the **schemaPath** User Defined Variables in the TestPlan to the absolute path for the current schema directory existing in the "**./jmeter/assignment-3/schema/**" like:<br>

        Windows: **"C:\Users\qa\Documents\Projects\assignment-qa\jmeter\assignment-3\schema"**<br>

        Linux: **/home/en1gma/Documents/VSCode/qa/assignment-qa/jmeter/assignment-3/schema""**

    3. Run the tests and see the results in View Results Tree listener
    #### \# Report of my assignment-3 can be found in the "./docx "directory

    ### <span style="color:green">**Assignment 4**<br></span>

    1. Open the "assignment-4.jmx" file in the "./jmeter/assignment-4" directory of the project to view the test plan

    2. <span style="color:green">**To run this jmx from the terminal use the below command**<br></span>
     <span style="color:aqua">**"jmeter -n -t /path/to/assignment-4.jmx -l /path/to/results.jtl -e -o /path/to/report"**<br></span>
    3. Finally view the reports by opening the /path/to/report/index.html
    #### \# Report of my assignment-4 can be found in the "./docx "directory

    ### <span style="color:green">**Assignment 5**<br></span>
    #### 1. Report of my assignment-5 can be found in the "./docx "directory
****
## Summary
****
## Screenshots of my run of the project
### <span style="color:gold">**Assignment 1 login validation**<br></span>
![Screenshot for Assignment 1](/screenshots/LoginReport.png)
### <span style="color:gold">**Assignment 2 form validation**<br></span>
![Screenshot for Assignment 1](/screenshots/Forms-1.png)
### <span style="color:gold">**Assignment 2 form test fail**<br></span>
![Screenshot for Assignment 1](/screenshots/Forms-2.png)
### <span style="color:gold">**Assignment 2 screenshot preview**<br></span>
![Screenshot for Assignment 1](/screenshots/Forms-3.png)
### <span style="color:gold">**Assignment 3 Jmeter**<br></span>
![Screenshot for Assignment 1](/screenshots/Jmx3.png)
### <span style="color:gold">**Assignment 4 Performance Testing**<br></span>
![Screenshot for Assignment 1](/screenshots/Jmx4.png)
****
### <span style="color:lime">**Testcases Analysis is done in reports for all assignments located in the "./docx" directory**<br></span>
