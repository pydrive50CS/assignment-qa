package utilities;

import java.io.InputStream;
import java.util.Properties;

public class ConfigReader {
    private static Properties props = new Properties();

    static {
        try {
            InputStream inputStream = ConfigReader.class.getClassLoader().getResourceAsStream("config.properties");
            if (inputStream == null) {
                throw new RuntimeException("config.properties not found in resources directory");
            }
            props.load(inputStream);
        } catch (Exception e) {
            throw new RuntimeException("Failed to load config.properties: " + e.getMessage());
        }
    }

    // Reads from system property first, then config file
    public static String get(String key) {
        return System.getProperty(key, props.getProperty(key));
    }
}
