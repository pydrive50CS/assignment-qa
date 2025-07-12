package utilities;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;


public class ScreenshotUtility extends Utilities{

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

            // Full path for saving the screenshot
            File dest = new File(screenshotDir + screenshotFile);
            FileUtils.copyFile(src, dest);

            // Return relative path for ExtentReport compatibility as abs path did not load during the report locally
            return "screenshots/" + screenshotFile;

        } catch (Exception e) {
            System.out.println("Screenshot capture failed: " + e.getMessage());
            return null;
        }
    }


}
