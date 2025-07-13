package utilities;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBUtility {

    public static Connection getConnection() throws Exception {
        String url = ConfigReader.get("db_url");
        String user = System.getenv("DB_USERNAME");
        String password = System.getenv("DB_PASSWORD");
        return DriverManager.getConnection(url, user, password);
    }

    public static List<Object[]> getLoginData() throws Exception {
        List<Object[]> data = new ArrayList<>();
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT test_case_code, test_case_name, username, password, expected_result FROM users")) {

            while (rs.next()) {
                String testCode = rs.getString("test_case_code");
                String testCaseName = rs.getString("test_case_name");
                String user = rs.getString("username");
                String pass = rs.getString("password");
                boolean result = rs.getBoolean("expected_result");
                data.add(new Object[]{testCode, testCaseName, user, pass, result});
            }
        }
        return data;
    }

    public static List<Object[]> getRequiredFieldTestData() throws Exception {
        List<Object[]> data = new ArrayList<>();
        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT test_case_code, description, first_name, last_name, mobile, gender, expect_error FROM form_test_cases")) {

            while (rs.next()) {
                String testCode = rs.getString("test_case_code");
                String description = rs.getString("description");
                String first_name = rs.getString("first_name");
                String last_name = rs.getString("last_name");
                String mobile = rs.getString("mobile");
                String gender = rs.getString("gender");
                boolean expect_error = rs.getBoolean("expect_error");
                data.add(new Object[]{testCode, description, first_name, last_name, mobile, gender, expect_error});
            }
        }
        return data;
    }
}

