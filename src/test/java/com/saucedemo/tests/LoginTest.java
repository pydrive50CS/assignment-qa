package com.saucedemo.tests;

import annotations.TestModule;
import com.aventstack.extentreports.ExtentTest;
import com.base.BaseTest;
import org.apache.commons.text.StringEscapeUtils;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import utilities.ConfigReader;
import utilities.DBUtility;
import utilities.ExtentReportManager;
import utilities.ScreenshotUtility;

import java.util.List;

import static utilities.EscapeHTMLUtility.escapeHtml;

@TestModule("Login")
public class LoginTest extends BaseTest {
    ScreenshotUtility screenshotUtility = new ScreenshotUtility();

    @Override
    protected String getReportName() {
        return "SauceDemo Login Tests";
    }

    @Override
    protected String getDocumentTitle() {
        return "Login Functionality Test";
    }

    @DataProvider(name = "loginDataFromDB")
    public Object[][] loginDataFromDB() throws Exception {
        List<Object[]> dataList = DBUtility.getLoginData();
        return dataList.toArray(new Object[0][]);
    }

    @Test(dataProvider = "loginDataFromDB")
    public void testLoginFunction(String testCaseCode, String testCaseName, String username, String password, boolean expectedResult) {
        ExtentReportManager.createTest(testCaseCode + " : " + testCaseName);
        ExtentTest test = ExtentReportManager.getTest();
        test.info("Test Case: " + testCaseName);
        String url = ConfigReader.get("login_url");

        try {
            test.info("Navigating to login page");
            driver.get(url);

            if (testCaseName.contains("XSS")) {
                test.info("Entering username: '" + escapeHtml(username) + "'");
            } else {
                test.info("Entering username: '" + username + "'");
            }

            loginPage.setUsername(username);

            test.info("Entering password: '" + password + "'");
            /*if (username.equals("problem_user")) {
                throw new RuntimeException("Simulated crash while entering password");
            }*/
            loginPage.setPassword(password);

            test.info("Clicking Login button");
            loginPage.clickLoginButton();

            boolean actualResult = loginPage.isLoginSuccessful();
            test.info("Expected result: " + expectedResult);
            test.info("Actual result: " + actualResult);

            if (actualResult == expectedResult) {
                ExtentReportManager.logPass("Login test passed");
            } else {
                ExtentReportManager.logFail("Login test failed. Expected: " + expectedResult + ", but got: " + actualResult);
                String screenshotPath = screenshotUtility.captureScreenshot(testCaseName + "_" + username);
                if (screenshotPath != null) {
                    test.fail("Failure screenshot:").addScreenCaptureFromPath(screenshotPath);
                }
                Assert.fail("Login test failed.");
            }
        } catch (Exception e) {
            ExtentReportManager.logFail("Test crashed: " + e.getMessage());

            String screenshotPath = screenshotUtility.captureScreenshot(testCaseName + "_" + username);
            if (screenshotPath != null) {
                test.fail("Crash Screenshot:").addScreenCaptureFromPath(screenshotPath);
            }
            throw e;
        }
    }
}
