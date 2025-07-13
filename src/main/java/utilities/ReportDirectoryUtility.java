package utilities;

import annotations.TestModule;

public class ReportDirectoryUtility {
    public static String[] getReportTitles(Class<?> testClass) {
        TestModule moduleAnnotation = testClass.getAnnotation(TestModule.class);
        String moduleName = (moduleAnnotation != null) ? moduleAnnotation.value() : "general";
        String capitalizedModule = capitalize(moduleName);

        return new String[] {
                capitalizedModule + " Module Report",   // Title
                capitalizedModule + " Test Report",     // Report Name
                moduleName.toLowerCase()                // Folder name or identifier
        };
    }

    private static String capitalize(String input) {
        if (input == null || input.isEmpty()) return input;
        return input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
    }
}
