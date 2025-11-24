CREATE DATABASE IF NOT EXISTS interview_db;
USE interview_db;

-- Create Building table
CREATE TABLE IF NOT EXISTS Building (
    id INT AUTO_INCREMENT PRIMARY KEY,
    height DECIMAL(10, 2),
    width DECIMAL(10, 2),
    length DECIMAL(10, 2),
    color VARCHAR(50),
    shape VARCHAR(50),
    gps_position VARCHAR(100)
);

-- Create Project table
CREATE TABLE IF NOT EXISTS Project (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    description TEXT,
    due_date DATE NOT NULL,
    completed_date DATE,
    building_id INT,
    FOREIGN KEY (building_id) REFERENCES Building(id)
);

-- Insert mock data for Buildings
INSERT INTO Building (height, width, length, color, shape, gps_position) VALUES
(150.50, 40.00, 40.00, 'Silver', 'Rectangular', '40.7128° N, 74.0060° W'),
(20.00, 10.00, 100.00, 'Brown', 'Arched', '51.5074° N, 0.1278° W'),
(45.00, 30.00, 60.00, 'White', 'Complex', '48.8566° N, 2.3522° E'),
(0.00, 500.00, 800.00, 'Green', 'Organic', '40.7851° N, 73.9683° W'),
(15.00, 20.00, 50.00, 'Grey', 'Box', '35.6762° N, 139.6503° E');

-- Insert mock data for Projects (matching frontend mock data)
INSERT INTO Project (name, status, description, due_date, completed_date, building_id) VALUES
('Office Tower A', 'Active', 'Construction of the main office tower.', '2024-12-01', NULL, 1),
('City Bridge Renovation', 'Pending', 'Renovation of the old city bridge.', '2025-03-15', NULL, 2),
('Residential Complex B', 'Completed', 'Phase 1 of the residential complex.', '2023-11-20', '2023-11-15', 3),
('Central Park Landscape', 'Active', 'Landscaping for the central park area.', '2024-06-30', NULL, 4),
('Subway Station Upgrade', 'Pending', 'Upgrading the signaling system.', '2025-01-10', NULL, 5);
