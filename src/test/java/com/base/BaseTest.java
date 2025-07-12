package com.base;

import com.saucedemo.pages.LoginPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import utilities.ExtentReportManager;

import java.lang.reflect.Method;

import static utilities.Utilities.setUtilityDriver;

public class BaseTest {

    protected WebDriver driver;
    final private String url = "https://www.saucedemo.com";
    protected BasePage basePage;
    protected LoginPage loginPage;

    @BeforeClass
    public void setUp() {
        ExtentReportManager.initReports(getReportName(), getDocumentTitle());

        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get(url);
        basePage = new BasePage();
        basePage.setDriver(driver);
        setUtilityDriver();
        loginPage = new LoginPage();
    }

   @BeforeMethod
   public void beforeMethod(Method method) {
       ExtentReportManager.createTest(method.getName());
   }
    @AfterClass
    public void tearDown() {
        driver.quit();
        ExtentReportManager.flush();
    }

    protected String getReportName() {
        return "Automation Test Report";
    }

    protected String getDocumentTitle() {
        return "Test Results";
    }
}