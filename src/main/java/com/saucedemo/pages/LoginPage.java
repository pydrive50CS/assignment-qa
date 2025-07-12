package com.saucedemo.pages;

import com.base.BasePage;
import org.openqa.selenium.By;

import java.util.ArrayList;
import java.util.List;

public class LoginPage extends BasePage {

    private By usernameField = By.id("user-name");
    private By passwordField = By.id("password");
    private By loginButton = By.id("login-button");
    private By errorMessage = By.cssSelector("#login_button_container h3");
    private By loginDetailsContainer = By.id("login_credentials");
    private By passwordContainer = By.xpath("//div[@class='login_password']");
    public void setUsername(String username) {
        set(usernameField, username);
    }

    public void setPassword(String password) {
        set(passwordField, password);
    }

    public void clickLoginButton() {
        click(loginButton);
    }

    public String getErrorMessage() {
        return find(errorMessage).getText();
    }
    public boolean isLoginSuccessful() {
        return driver.getCurrentUrl().contains("inventory");
    }

    public boolean isErrorDisplayed() {
        return find(errorMessage).getText().contains("Epic sadface:");
    }

    public List<String> extractUsernames() {
        String rawText = find(loginDetailsContainer).getText();

        List<String> usernames = new ArrayList<>();
        boolean startExtracting = false;

        for (String line : rawText.split("\n")) {
            if (line.trim().toLowerCase().contains("accepted usernames")) {
                startExtracting = true;
                continue;
            }
            if (startExtracting && !line.trim().isEmpty()) {
                usernames.add(line.trim());
            }
        }
        return usernames;
    }

    public String getPassword() {
        final String fullText = find(passwordContainer).getText();
        System.out.println("Full text retrieved: \n" + fullText);
        String[] lines = fullText.split("\n");
        return lines[1].trim();
    }
}