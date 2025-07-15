package utilities;

import org.openqa.selenium.PageLoadStrategy;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverFactory {

    public static WebDriver createDriver(String browser) {
        if (browser == null) browser = "chrome"; // Default to Chrome

        switch (browser.toLowerCase()) {
            case "chrome":
                ChromeOptions options = new ChromeOptions();
                options.addArguments("--remote-allow-origins=*");
                options.setPageLoadStrategy(PageLoadStrategy.NORMAL);
                return new ChromeDriver(options);

            case "firefox":
                return new FirefoxDriver();

            default:
                throw new IllegalArgumentException("Unsupported browser: " + browser);
        }
    }
}
