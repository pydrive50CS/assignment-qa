package com.saucedemo.tests;

import com.aventstack.extentreports.ExtentTest;
import com.base.BaseTest;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import utilities.ConfigReader;
import utilities.DBUtility;
import utilities.ExtentReportManager;
import utilities.ScreenshotUtility;

import java.util.List;

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
    public void testLoginFunction( String testCaseCode, String testCaseName, String username, String password, boolean expectedResult) {
        ExtentReportManager.createTest(testCaseCode + " : " + testCaseName);
        ExtentTest test = ExtentReportManager.getTest();
        test.info("Test Case: " + testCaseName);

        try {
            test.info("Navigating to login page");
            driver.get(ConfigReader.get("baseUrl"));

            test.info("Entering username: '" + username + "'");
            loginPage.setUsername(username);

            test.info("Entering password: '" + password + "'");

            //test for screenshot working during exception
            /* if (username.equals("problem_user")) {
                throw new RuntimeException("Simulated crash while entering password");
            }*/

            loginPage.setPassword(password);  // ← if this crashes, we catch it below

            test.info("Clicking Login button");
            loginPage.clickLoginButton();

            boolean actualResult = loginPage.isLoginSuccessful();
            test.info("Expected result: " + expectedResult);
            test.info("Actual result: " + actualResult);

            Assert.assertEquals(actualResult, expectedResult, "Login test failed");
            ExtentReportManager.logPass("Login test passed");

        }
        catch (Exception e) {
            ExtentReportManager.logFail("Test crashed: " + e.getMessage());

            String screenshotPath = screenshotUtility.captureScreenshot(testCaseName);
            if (screenshotPath != null) {
                test.addScreenCaptureFromPath(screenshotPath);
            }
            throw e;
        }

    }
}
