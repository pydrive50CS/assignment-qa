package com.base;

import com.demoqa.pages.FormsPage;
import com.saucedemo.pages.LoginPage;
import org.openqa.selenium.WebDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import utilities.ConfigReader;
import utilities.DriverFactory;
import utilities.ExtentReportManager;
import utilities.ReportDirectoryUtility;

import static utilities.Utilities.setUtilityDriver;

public class BaseTest {
    String browser = ConfigReader.get("browser");
    protected LoginPage loginPage;
    protected WebDriver driver;
    protected BasePage basePage;
    protected FormsPage formsPage;

    @BeforeClass
    public void setUp() {
        String[] titles = ReportDirectoryUtility.getReportTitles(this.getClass());
        ExtentReportManager.initReports(titles[0], titles[1], titles[2]);
        driver = DriverFactory.createDriver(browser);
        driver.manage().window().maximize();
        basePage = new BasePage();
        basePage.setDriver(driver);
        setUtilityDriver();
        loginPage = new LoginPage();
        formsPage = new FormsPage();
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