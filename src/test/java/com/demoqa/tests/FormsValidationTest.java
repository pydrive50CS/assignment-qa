package com.demoqa.tests;

import annotations.TestModule;
import com.aventstack.extentreports.ExtentTest;
import com.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import utilities.*;

import java.util.List;

import static utilities.JavaScriptUtility.highlightElement;

@TestModule("Forms")
public class FormsValidationTest extends BaseTest {

    ScreenshotUtility screenshotUtility = new ScreenshotUtility();

    @Override
    protected String getReportName() {
        return "Required Field Validation and Security Tests";
    }

    @Override
    protected String getDocumentTitle() {
        return "Verify required field messages and input sanitization";
    }

    private void verifyValidationMessage(String fieldName, String actual, String expected) {
        ExtentTest test = ExtentReportManager.getTest();
        if (actual.equals(expected)) {
            ExtentReportManager.logPass("For Field: "+ fieldName + " validation pass. Expected '" + expected + "', Actual '" + actual + "'");

        } else {
            ExtentReportManager.logFail(fieldName + " validation mismatch. Expected '" + expected + "', Actual '" + actual + "'");
            formsPage.scrollToField(fieldName);
            highlightElement(formsPage.getLocatorByFieldName(fieldName));
            String screenshotPath = screenshotUtility.captureScreenshot(fieldName + "_valFail");
            if (screenshotPath != null) test.fail("Screenshot:").addScreenCaptureFromPath(screenshotPath);
            Assert.fail("Mismatch validation message for " + fieldName);
        }
    }

    private ValidationResult validateInput(String fieldName, String input, int maxLength, String fieldLocatorKey) {
        ValidationResult result = new ValidationResult();

        ValidationResult sanitization = InputValidatorsUtility.validateSanitization(fieldName, input, maxLength);
        ValidationResult security = InputValidatorsUtility.validateSecurity(fieldName, input);
        result.merge(sanitization);
        result.merge(security);

       /* if (fieldLocatorKey.equals("mobile")) {
            if (input != null && !input.matches("^\\d*$")) {
                result.addFailure(fieldName + " must contain only digits");
            }
        }*/
        if (result.hasFailures()) {
            ExtentReportManager.logFail(fieldName + " validation failures: " + result);
            highlightElement(formsPage.getLocatorByFieldName(fieldLocatorKey));
            String screenshotPath = screenshotUtility.captureScreenshot(fieldName.replace(" ", "") + "_ValidationFail");
            if (screenshotPath != null)
                ExtentReportManager.getTest().fail("Screenshot:").addScreenCaptureFromPath(screenshotPath);
        }

        return result;
    }

    @DataProvider(name = "dbFormTests")
    public Object[][] loginDataFromDB() throws Exception {
        List<Object[]> dataList = DBUtility.getRequiredFieldTestData();
        return dataList.toArray(new Object[0][]);
    }

    @Test(dataProvider = "dbFormTests", priority = 1)
    public void testFormCombinationsFromDB(String testCaseCode, String testCaseName,
                                           String firstName, String lastName,
                                           String mobile, String gender,
                                           boolean expectError) {

        ExtentReportManager.createTest(testCaseCode + " : " + testCaseName);
        ExtentTest test = ExtentReportManager.getTest();

        driver.get("https://demoqa.com/automation-practice-form");
        test.info("Loaded forms page");

        // === Enter Inputs ===
        if (firstName != null) {
            formsPage.enterFirstName(firstName);
            test.info("Entered first name");
        }
        if (lastName != null) {
            formsPage.enterLastName(lastName);
            test.info("Entered last name");
        }
        if (mobile != null) {
            formsPage.enterMobile(mobile);
            test.info("Entered mobile");
        }
        if (gender != null && !gender.isEmpty()) {
            formsPage.selectGenderMale();
            test.info("Selected gender");
        }

        formsPage.submitForm();
        test.info("Submitted form");

        ValidationResult mergedValidationResult = new ValidationResult();
        mergedValidationResult.merge(validateInput("First Name", firstName, 50, "firstName"));
        mergedValidationResult.merge(validateInput("Last Name", lastName, 50, "lastName"));
        mergedValidationResult.merge(validateInput("Mobile", mobile, 10, "mobile"));


        boolean errorShown = formsPage.hasValidationError();
        test.info("Error displayed: " + errorShown);

        boolean validationFailed = mergedValidationResult.hasFailures();
        if (expectError && !errorShown) {
            validationFailed = true;
            ExtentReportManager.logFail("Expected validation error but none was shown.");
        } else if (!expectError && errorShown) {
            validationFailed = true;
            ExtentReportManager.logFail("Unexpected validation error shown.");
        } else {
            ExtentReportManager.logPass("Validation error presence matched expectation.");
        }

        if (expectError) {
            if (firstName == null || firstName.trim().isEmpty()) {
                verifyValidationMessage("firstName", formsPage.getValidationMessage("firstName"), "Please fill out this field.");
            }
            if (lastName == null || lastName.trim().isEmpty()) {
                verifyValidationMessage("lastName", formsPage.getValidationMessage("lastName"), "Please fill out this field.");
            }
            if (mobile == null || mobile.trim().isEmpty()) {
                verifyValidationMessage("mobile", formsPage.getValidationMessage("mobile"), "Please fill out this field.");
            }
        }

        if (validationFailed) {
            Assert.fail("Test case failed due to: " + mergedValidationResult);
        }
    }
}
