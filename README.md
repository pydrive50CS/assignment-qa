# assignment-qa

Running steps:
test run performed in java 21
first initialize the database
```sudo mariadb -u root -p < ./database/init.sql```
then set the environment variables and use envfile plugin to load the variables or run in terminal with
```DB_USERNAME=<username> DB_PASSWORD=<yourpassword> mvn test```
the reports will be generated in the reports folder

documentation and work approach in the /docx/assignment1.odt
