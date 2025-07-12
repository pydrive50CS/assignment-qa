package utilities;

import com.aventstack.extentreports.*;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ExtentReportManager{

    private static ExtentReports extent;
    private static ThreadLocal<ExtentTest> test = new ThreadLocal<>();

    public static void initReports(String reportName, String documentTitle) {
        if (extent == null) {
            new File("reports").mkdirs();

            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());
            String reportPath = "reports/ExtentReport_" + timestamp + ".html";

            ExtentSparkReporter spark = new ExtentSparkReporter(reportPath);
            spark.config().setReportName(reportName);
            spark.config().setDocumentTitle(documentTitle);
            spark.config().setTheme(Theme.STANDARD);

            extent = new ExtentReports();
            extent.attachReporter(spark);
            extent.setSystemInfo("Environment", "QA");
            extent.setSystemInfo("OS", System.getProperty("os.name"));
            extent.setSystemInfo("Java Version", System.getProperty("java.version"));
        }
    }

    public static void createTest(String testName) {
        ExtentTest extentTest = extent.createTest(testName);
        test.set(extentTest);
    }

    public static ExtentTest getTest() {
        return test.get();
    }

    public static void logInfo(String message) {
        getTest().info(message);
    }

    public static void logPass(String message) {
        getTest().pass(message);
    }

    public static void logFail(String message) {
        getTest().fail(message);
    }

    public static void logWarning(String message) {
        getTest().warning(message);
    }

    public static void flush() {
        if (extent != null) {
            extent.flush();
        }
    }
}
