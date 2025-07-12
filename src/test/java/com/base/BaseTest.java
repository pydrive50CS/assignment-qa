package com.base;

import com.saucedemo.pages.LoginPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import utilities.ConfigReader;
import utilities.DriverFactory;
import utilities.ExtentReportManager;

import java.lang.reflect.Method;

import static utilities.Utilities.setUtilityDriver;

public class BaseTest {

    protected WebDriver driver;
    protected BasePage basePage;
    protected LoginPage loginPage;
    String browser = ConfigReader.get("browser");
    String url = ConfigReader.get("baseUrl");


    @BeforeClass
    public void setUp() {
        ExtentReportManager.initReports(getReportName(), getDocumentTitle());
        driver = DriverFactory.createDriver(browser);
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