package com.base;

import com.demoqa.pages.FormsPage;
import com.saucedemo.pages.LoginPage;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import utilities.ConfigReader;
import utilities.DriverFactory;
import utilities.ExtentReportManager;
import utilities.ReportDirectoryUtility;

import java.lang.reflect.Method;

import static utilities.Utilities.setUtilityDriver;

public class BaseTest {
    String browser = ConfigReader.get("browser");
    String url = ConfigReader.get("baseUrl");
    protected LoginPage loginPage;
    protected WebDriver driver;
    protected BasePage basePage;
    protected FormsPage formsPage;


    @BeforeClass
    public void setUp() {
        String[] titles = ReportDirectoryUtility.getReportTitles(this.getClass());
        ExtentReportManager.initReports(titles[0], titles[1], titles[2]);
//      ExtentReportManager.initReports(getReportName(), getDocumentTitle());
        driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        driver.get(url);
        basePage = new BasePage();
        basePage.setDriver(driver);
        setUtilityDriver();
        loginPage = new LoginPage();
        formsPage = new FormsPage();
    }

   @BeforeMethod
   public void beforeMethod(Method method) {
//       ExtentReportManager.createTest(method.getName());
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