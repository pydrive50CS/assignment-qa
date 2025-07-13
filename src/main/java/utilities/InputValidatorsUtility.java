package utilities;

public class InputValidatorsUtility {

    public static boolean isWhitespaceOnly(String input) {
        return input != null && input.trim().isEmpty();
    }

    public static boolean containsXSS(String input) {
        if (input == null) return false;
        String lower = input.toLowerCase();
        return lower.contains("<script") || lower.contains("<img") || lower.contains("onerror");
    }

    public static boolean containsSQLInjection(String input) {
        if (input == null) return false;
        String pattern = ".*([';]+|(--)+|\\b(or|and|select|drop|insert|update)\\b).*";
        return input.toLowerCase().matches(pattern);
    }

    public static boolean containsSpecialCharacters(String input) {
        if (input == null) return false;
        return input.matches(".*[^a-zA-Z0-9\\s].*");
    }

    public static boolean exceedsLength(String input, int maxLength) {
        return input != null && input.length() > maxLength;
    }

    public static boolean isValidMobileFormat(String input) {
        if (input == null) return false;
        return input.matches("^[0-9]{10}$");
    }

    // === Combined Validations ===

    public static ValidationResult validateSanitization(String fieldLabel, String input, int maxLength) {
        ValidationResult result = new ValidationResult();

        if (isWhitespaceOnly(input)) {
            result.addFailure(fieldLabel + " is whitespace only");
        }
        if (containsSpecialCharacters(input)) {
            result.addFailure(fieldLabel + " contains special characters");
        }
        if (exceedsLength(input, maxLength)) {
            result.addFailure(fieldLabel + " exceeds max length (" + maxLength + ")");
        }

        return result;
    }

    public static ValidationResult validateSecurity(String fieldLabel, String input) {
        ValidationResult result = new ValidationResult();

        if (containsXSS(input)) {
            result.addFailure(fieldLabel + " contains potential XSS code");
        }
        if (containsSQLInjection(input)) {
            result.addFailure(fieldLabel + " contains potential SQL injection");
        }

        return result;
    }
}
