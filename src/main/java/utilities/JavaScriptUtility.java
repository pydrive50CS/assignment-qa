package utilities;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class JavaScriptUtility extends Utilities {

    public static void scrollToElementJS(By locator) {
        WebElement element = driver.findElement(locator);
        String jsScript = "arguments[0].scrollIntoView();";
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript(jsScript, element);
    }

    public static void clickJS(By locator) {
        WebElement element = driver.findElement(locator);
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", element);
    }

    public static boolean isFieldValidJS(By locator) {
        WebElement element = driver.findElement(locator);
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        return (Boolean) executor.executeScript("return arguments[0].checkValidity();", element);
    }

    public static void highlightElement(By locator) {
        WebElement element = driver.findElement(locator);
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        String originalStyle = element.getAttribute("style");
        executor.executeScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                element, "style", "border: 6px solid red #FF0000; box-shadow: 0 0 10px #FF0000;");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restore the interrupted status
            System.err.println("Highlight sleep interrupted: " + e.getMessage());
        }

        executor.executeScript("arguments[0].setAttribute(arguments[1], arguments[2])",
                element, "style", originalStyle);
    }

}