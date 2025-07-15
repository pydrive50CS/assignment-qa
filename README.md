# Assignment Task for QA Automation Engineer

### Dependencies/Tools Required

Attribute | Plugin Link |
------------ | ------------- |
JSON Schema Assertion | https://github.com/kde-intro/jmeter-json-schema-assertion-plugin |
Apache Jmeter | https://jmeter.apache.org/download_jmeter.cgi |
maven |https://maven.apache.org/install.html
sqlite | https://sqlite.org/download.html

## Installation of Plugin
1. Copy the **Custom_JsonSchemaAssertion_component-0.4.jar** located at ./jmeter in "assignment-qa" project to your **JMeter** home directory/lib/ext/<br>


---------------------------------------------------------------OR--------------------------------------------------------------------------------
****
1. Clone the repo at:: https://github.com/kde-intro/jmeter-json-schema-assertion-plugin
2. Build extension - create _jar_ file by running Maven build _package_ (cli: _mvn package_).
3. Put the generated jar file (Custom_JsonSchemaAssertion_component.jar) from _target_ folder to JMeter _JMeter home directory/lib/ext/_ directory.

****
## Note
## <span style="color:red">****\# Detail documentation and analysis is availale in the "./docx" folder of the project for all assignments****<br></span>

## Assignment Project Installation
1. Clone the repo:: https://github.com/pydrive50CS/assignment-qa
    ### ***Note:  If there is no database or you want to make modifications on the database for testcases then use the following command:***<br>

    #### "sqlite3 ./database/testdb.sqlite < ./database/your_database_init.sqlite"

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
This project showcases capabilities in software quality assurance, encompassing web UI automation, API functional testing, and performance testing with application of Page Object Model and Data-Driven Testing, to ensure a highly organized and efficient testing process.The project attempts to validate software across functional, security, and performance perspective. Detailed insights are provided using ExtentReports and JMeter dashboards.

Tools & Technologies: Selenium WebDriver, Java, TestNG, ExtentReports, SQLite Database.
## Features
#### Methodology & Design Principles
    1. Page Object Model (POM)
    2. Data-Driven Testing (DDT)
    3. Negative & Edge Case Testing
    4. Structured Test Case Management
    5. Comprehensive Reporting

#### Web UI Automation (Selenium & TestNG)

    1. Complex Form Validation: Automated the testing of a multi-field form, validating browser-side and programmatic rules for required fields, data formats (mobile numbers), whitespace, and special characters.
    2. UI-Based Security Checks: Proactively tested for common web vulnerabilities by injecting basic XSS payloads (<script>, <img onerror>) and SQL injection strings into form fields to verify input sanitization.
    3. JavaScript Execution: Utilized a JavaScriptUtility to perform actions not easily handled by standard Selenium commands, including highlighting elements  and ensuring interaction with elements that require scrolling into view.
    4. Framework Management: Use of utilities for configuration management (ConfigReader), cross-browser support (DriverFactory), and screenshot capture.
 #### API & Performance Testing (JMeter)

    End-to-End API Functional Testing: Tested the full lifecycle of API endpoints covering all CRUD operations (GET, POST, PUT, DELETE).

    Authentication & Authorization: Implemented tests for token-based authentication, extracting a JWT token from a login endpoint and passing it as a bearer token in subsequent requests. Tested protected endpoints with and without a valid token.

    Schema & Response Validation: Used JSON Schema Assertion to validate the structure of API responses and Response Assertions to verify status codes and body content.

    Content-Type Handling: Verified API behavior with different Accept and Content-Type headers, including application/json and application/xml.

    Performance Testing: Designed and executed a performance test by configuring a Thread Group with multiple users, a ramp-up period, and a loop count.

    Dynamic Parameterization: Used Groovy scripting within JMeter to generate dynamic data (random delay value) for each reques

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
