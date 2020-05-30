-- This schema file represents the mysql database setup and table creation therein

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';
	

CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers
(
id int AUTO_INCREMENT NOT NULL,
  burger_name varchar(50) NOT NULL,
  devoured boolean NOT NULL DEFAULT 0,
  PRIMARY KEY(id)
);
