package utilities;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

import static utilities.JavaScriptUtility.highlightElement;

public class ScreenshotUtility extends Utilities {

    public String captureScreenshot(String testName) {
        try {
            String timestamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(new Date());

            String screenshotDir = "reports/screenshots/";
            String screenshotFile = testName.replaceAll("\\s+", "_") + "_" + timestamp + ".png";

            File dir = new File(screenshotDir);
            if (!dir.exists()) {
                dir.mkdirs();
            }
            TakesScreenshot ts = (TakesScreenshot) driver;
            File src = ts.getScreenshotAs(OutputType.FILE);

            File dest = new File(screenshotDir + screenshotFile);
            FileUtils.copyFile(src, dest);

            // Path returned should be relative to where ExtentReport is generated (usually /reports/)
            return "../screenshots/" + screenshotFile;


        } catch (Exception e) {
            System.out.println("Screenshot capture failed: " + e.getMessage());
            return null;
        }
    }
}
