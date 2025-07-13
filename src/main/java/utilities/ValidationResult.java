package utilities;

import java.util.ArrayList;
import java.util.List;

public class ValidationResult {
    private final List<String> failedChecks = new ArrayList<>();

    public void addFailure(String checkName) {
        failedChecks.add(checkName);
    }

    public boolean hasFailures() {
        return !failedChecks.isEmpty();
    }

    public List<String> getFailedChecks() {
        return failedChecks;
    }

    public void merge(ValidationResult other) {
        if (other != null && other.hasFailures()) {
            failedChecks.addAll(other.getFailedChecks());
        }
    }

    @Override
    public String toString() {
        return String.join(", ", failedChecks);
    }
}
