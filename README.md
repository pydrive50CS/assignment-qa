# assignment-qa

Running steps:
test run performed in java 21(JDK 21)
on windows download microsoft-openjdk-21 in intelliJ
first initialize the database
```sudo mariadb -u root -p < ./database/init.sql```
then set the environment variables and use envfile plugin to load the variables or run in terminal with
```DB_USERNAME=<username> DB_PASSWORD=<yourpassword> mvn test```
the reports will be generated in the reports folder
#sqlite3 ./database/testdb.sqlite < ./database/login.sqlite
documentation and work approach in the /docx/assignment1.odt
