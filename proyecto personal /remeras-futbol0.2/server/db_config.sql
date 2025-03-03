CREATE DATABASE futbol_editor;
USE futbol_editor;

CREATE TABLE designs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    design_data JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
