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
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  test_case_name VARCHAR(100) NOT NULL,   -- Descriptive test name
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  expected_result BOOLEAN NOT NULL
);

INSERT INTO users (test_case_name, username, password, expected_result) VALUES
('Valid user', 'standard_user', 'secret_sauce', TRUE),
('Locked out user', 'locked_out_user', 'secret_sauce', FALSE),
('Problem user valid login', 'problem_user', 'secret_sauce', TRUE),
('Performance glitch user valid login', 'performance_glitch_user', 'secret_sauce', TRUE),
('Invalid user', 'invalid_user', 'secret_sauce', FALSE),
('Wrong password', 'standard_user', 'wrong_password', FALSE),
('Empty username', '', 'secret_sauce', FALSE),
('Empty password', 'standard_user', '', FALSE),
('Both fields empty', '', '', FALSE),
('SQL Injection username', '\' OR 1=1--', 'any', FALSE),
('SQL Injection password', 'standard_user', '\' OR \'1\'=\'1', FALSE),
('Special characters', 'special!@#$', 'pa$$word!@#', FALSE),
('Long username (50 chars)', REPEAT('a', 50), 'secret_sauce', FALSE),
('XSS input', '<script>alert(1)</script>', 'test', FALSE),
('Username with whitespace', ' standard_user ', 'secret_sauce', FALSE),
('Password with whitespace', 'standard_user', ' secret_sauce ', FALSE),
('Username all spaces', '    ', 'secret_sauce', FALSE),
('Password all spaces', 'standard_user', '   ', FALSE);

-- sudo mariadb -u root -p < ./database/init.sql