package utilities;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class DBUtility {

    private static final String DB_URL =ConfigReader.get("db_url");

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(DB_URL);
    }

    public static List<Object[]> getLoginData() {
        List<Object[]> data = new ArrayList<>();
        String query = "SELECT test_case_code, test_case_name, username, password, expected_result FROM users";

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                String testCode = rs.getString("test_case_code");
                String testCaseName = rs.getString("test_case_name");
                String user = rs.getString("username");
                String pass = rs.getString("password");
                boolean result = rs.getInt("expected_result") == 1;
                data.add(new Object[]{testCode, testCaseName, user, pass, result});
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return data;
    }

    public static List<Object[]> getRequiredFieldTestData() {
        List<Object[]> data = new ArrayList<>();
        String query = "SELECT test_case_code, description, first_name, last_name, mobile, gender, expect_error FROM form_test_cases";

        try (Connection conn = getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(query)) {

            while (rs.next()) {
                String testCode = rs.getString("test_case_code");
                String description = rs.getString("description");
                String first_name = rs.getString("first_name");
                String last_name = rs.getString("last_name");
                String mobile = rs.getString("mobile");
                String gender = rs.getString("gender");
                boolean expect_error = rs.getInt("expect_error") == 1;
                data.add(new Object[]{testCode, description, first_name, last_name, mobile, gender, expect_error});
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return data;
    }
}
