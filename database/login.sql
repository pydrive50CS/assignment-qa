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
  test_case_code VARCHAR(100) NOT NULL,
  test_case_name VARCHAR(100) NOT NULL,
  username VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL,
  expected_result BOOLEAN NOT NULL
);

INSERT INTO users (test_case_code, test_case_name, username, password, expected_result) VALUES
('TC01','Valid user', 'standard_user', 'secret_sauce', TRUE),
('TC02','Locked out user', 'locked_out_user', 'secret_sauce', FALSE),
('TC03','Problem user valid login', 'problem_user', 'secret_sauce', TRUE),
('TC04','Performance glitch user valid login', 'performance_glitch_user', 'secret_sauce', TRUE),
('TC05','Invalid user', 'invalid_user', 'secret_sauce', FALSE),
('TC06','Wrong password', 'standard_user', 'wrong_password', FALSE),
('TC07','Empty username', '', 'secret_sauce', FALSE),
('TC08','Empty password', 'standard_user', '', FALSE),
('TC09','Both fields empty', '', '', FALSE),
('TC10','SQL Injection username', '\' OR 1=1--', 'any', FALSE),
('TC11','SQL Injection password', 'standard_user', '\' OR \'1\'=\'1', FALSE),
('TC12','Special characters', 'special!@#$', 'pa$$word!@#', FALSE),
('TC13','Long username (50 chars)', REPEAT('a', 50), 'secret_sauce', FALSE),
('TC14','XSS input', '<script>alert(1)</script>', 'test', FALSE),
('TC15','Username with whitespace', ' standard_user ', 'secret_sauce', FALSE),
('TC16','Password with whitespace', 'standard_user', ' secret_sauce ', FALSE),
('TC17','Username all spaces', '    ', 'secret_sauce', FALSE),
('TC18','Password all spaces', 'standard_user', '   ', FALSE);

-- sudo mariadb -u root -p < ./database/init.sql