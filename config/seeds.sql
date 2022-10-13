-- Active: 1664493488256@@127.0.0.1@3306@books_db
DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Lennon", 1, NULL), ("Paul", "McCartney", 2, 1), ("George", "Harrison", 3, NULL), ("Ringo", "Starr", 4, 3), ("Chuck", "Berry", 5, 5), ("Elvis", "Presly", 6, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bobby", "Jenks", 2, 1), ("Paul", "Konerko", 4, 3), ("Mark", "Burhrle", 6, 5);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT,
  PRIMARY KEY (id)
);

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 80000, 1), ("Salesperson", 65000, 1), ("Legal Team Lead", 120000, 2), ("Lawyer", 105000, 2), ("Lead Engineer", 111000, 3), ("Engineer", 95000, 3);

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  PRIMARY KEY (id)
);

INSERT INTO department (name)
VALUES ("Sales"), ("Legal"), ("Engineering");