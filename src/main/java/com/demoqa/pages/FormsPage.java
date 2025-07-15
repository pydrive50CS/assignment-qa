package com.demoqa.pages;

import org.openqa.selenium.By;
import com.base.BasePage;
import org.openqa.selenium.WebElement;

import static utilities.JavaScriptUtility.*;

public class FormsPage extends BasePage {

    private By firstName = By.id("firstName");
    private By lastName = By.id("lastName");
    private By maleRadioButton = By.id("gender-radio-1");
    private By femaleRadioButton = By.id("gender-radio-2");
    private By otherRadioButton = By.id("gender-radio-3");

    private By mobile = By.id("userNumber");
    private By submitButton = By.id("submit");

    public void submitForm() {
        scrollToElementJS(submitButton);
        clickJS(submitButton);
    }

    public void enterFirstName(String name) {
        setText(firstName, name);
    }

    public void enterLastName(String name) {
        setText(lastName, name);
    }

    public void enterMobile(String number) {
        scrollToElementJS(mobile);
        setText(mobile, number);
    }

    public void selectGenderMale() {
        WebElement maleRadio = find(maleRadioButton);
        if (!maleRadio.isSelected()) {
            clickJS(maleRadioButton);
        }
    }

    public void scrollToField(String fieldName) {
        By locator = getLocatorByFieldName(fieldName);
        scrollToElementJS(locator);
    }

    //Validation methods

    public String getValidationMessage(String fieldName) {
        By locator = getLocatorByFieldName(fieldName);
        return find(locator).getAttribute("validationMessage");
    }

    public String getFirstNameValidationMessage() {
        return getValidationMessage("firstName");
    }

    public String getLastNameValidationMessage() {
        return getValidationMessage("lastName");
    }

    public String getMobileValidationMessage() {
        return getValidationMessage("mobile");
    }

    public boolean isFieldValid(By locator) {
        return isFieldValidJS(locator);
    }

    public boolean isMobileFieldValid() {
        return isFieldValid(mobile);
    }

    public boolean hasValidationError() {
        return !getFirstNameValidationMessage().isEmpty()
                || !getMobileValidationMessage().isEmpty()
                || !getLastNameValidationMessage().isEmpty()
                || !isMobileFieldValid();
    }

    public boolean isGenderSelected() {
        return find(maleRadioButton).isSelected() || find(femaleRadioButton).isSelected() || find(otherRadioButton).isSelected();
    }

    public By getLocatorByFieldName(String fieldName) {
        switch (fieldName) {
            case "firstName":
                return firstName;
            case "lastName":
                return lastName;
            case "mobile":
                return mobile;
            default:
                throw new IllegalArgumentException("Unknown field: " + fieldName);
        }
    }
}
