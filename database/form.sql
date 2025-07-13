-- Create the test database
CREATE DATABASE IF NOT EXISTS testdb;

-- Create testuser with password
CREATE USER IF NOT EXISTS 'testuser'@'localhost' IDENTIFIED BY 'Test@1234';

-- Grant access to the testdb database
GRANT ALL PRIVILEGES ON testdb.* TO 'testuser'@'localhost';

-- Apply privilege changes
FLUSH PRIVILEGES;

-- Use the database
USE testdb;

-- Drop table if it already exists
DROP TABLE IF EXISTS form_test_cases;

-- Create table to store form test cases with codes and descriptions
CREATE TABLE IF NOT EXISTS form_test_cases (
    id INT PRIMARY KEY AUTO_INCREMENT,
    test_case_code VARCHAR(20) NOT NULL,
    description VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    mobile VARCHAR(20),
    gender VARCHAR(10),
    expect_error BOOLEAN
);

-- Insert test cases covering validation, edge, and security scenarios
INSERT INTO form_test_cases
(test_case_code, description, first_name, last_name, mobile, gender, expect_error) VALUES
('TC01', 'All fields empty', NULL, NULL, NULL, 'Male', TRUE),
('TC02', 'Only first name provided', 'John', NULL, NULL, 'Male', TRUE),
('TC03', 'Only last name provided', NULL, 'Shrestha', NULL, 'Male', TRUE),
('TC04', 'Only mobile number provided', NULL, NULL, '9876543210', 'Male', TRUE),
('TC05', 'First name and last name provided, no mobile', 'Iron', 'Shrestha', NULL, 'Male', TRUE),
('TC06', 'First name and mobile provided, no last name', 'Silver', NULL, '9876543210', 'Male', TRUE),
('TC07', 'Last name and mobile provided, no first name', NULL, 'Rai', '9876543210', 'Male', TRUE),
('TC08', 'All required fields provided correctly', 'Elle', 'Musk', '9876543210', 'Male', FALSE),
('TC09', 'First name has spaces only', '   ', 'Gates', '9876543210', 'Male', TRUE),
('TC10', 'First name has script injection', '<script>', 'Test', '9876543210', 'Male', TRUE),
('TC11', 'Last name has image error injection', 'Rock', '<img onerror>', '9876543210', 'Male', TRUE),
('TC12', 'Mobile has SQL injection attempt', "'; OR 1=1--", 'King', "1234abcd", 'Male', TRUE),
('TC13', 'Special characters in first and last name', '!@#$', '%^&*', '()_+', 'Male', TRUE),
('TC14', 'First name exceeds max length', REPEAT('A', 100), 'Thapa', '9876543210', 'Male', TRUE),
('TC15', 'First and last names with leading/trailing spaces', ' Test ', ' Lint ', ' 9876543210 ', 'Male', FALSE),
('TC16', 'Special characters in last name', 'Jim', '!@#$', '9876543210', 'Male', TRUE),
('TC17', 'Mobile number too short', 'Hari', 'Ram', '12345', 'Male', TRUE),
('TC18', 'Mobile number contains alphabets', 'Geralt', 'Rivea', '9876AB3210', 'Male', TRUE),
('TC19', 'Gender field empty', 'The', 'Witcher', '9876543210', NULL, FALSE);
