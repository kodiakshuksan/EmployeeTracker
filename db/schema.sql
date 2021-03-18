-- Drops the tracker_db if it exists currently --
DROP DATABASE IF EXISTS tracker_db;

-- Creates the "trackr_db" database --
CREATE DATABASE tracker_db;

-- Makes it so all of the following code will affect tracker_db --
USE tracker_db;




CREATE TABLE part (
  -- Makes id for each row --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column that cannot contain null --
  title VARCHAR(30) NOT NULL,
  -- Makes a sting column called "salary" --
  salary DECIMAL(10,2) NOT NULL,
  -- Makes an numeric column called "department_id" --
  department_id INT NOT NULL, 
  PRIMARY KEY (id)
  );


-- Creates the table "department" within tracker_db --
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
   -- Makes a string column called "name" which cannot contain null --
   department_name VARCHAR(30) NOT NULL,
   PRIMARY KEY (id)
);
-- Creates the table "employee" within tracker_db --
CREATE TABLE employee (
  -- Makes id for each row --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column that cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  -- Makes a sting column called "last_name" --
  last_name VARCHAR(30) NOT NULL,
  -- Makes an numeric column called "role_id" --
  part_id INT,
   -- Makes an numeric column called "manager_id" --
  manager_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (part_id) REFERENCES part(id),
  FOREIGN KEY (manager_id) REFERENCES part(id)
);



INSERT INTO employee (first_name, last_name) values ('Jane', 'Austen');


INSERT INTO department (department_name) values ('Math');
