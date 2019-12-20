USE sql_intro;

-- CREATE TABLE dogs (
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     dog_name VARCHAR(20),
--     dog_picture VARCHAR(80),
--     gender VARCHAR(6),
--     age TINYINT,
--     weight TINYINT,
--     vaccinated BOOLEAN,
--     neutered BOOLEAN,
--     dog_status TINYINT DEFAULT 1
-- );

-- DROP TABLE parks;



-- CREATE TABLE owners(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     owner_name VARCHAR(50),
--     owner_picture VARCHAR(80),
--     email VARCHAR(80),
--     owner_status TINYINT DEFAULT 1
-- );

-- CREATE TABLE dog_owner(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     owner_id INT,
--     dog_id INT,
--     FOREIGN KEY (owner_id) REFERENCES owners(id),
--     FOREIGN KEY (dog_id) REFERENCES dogs(id)
-- );


-- DROP TABLE parks;

-- CREATE TABLE parks(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     park_name VARCHAR(50),
--     lng VARCHAR(20),
--     lat VARCHAR(20),
--     address VARCHAR(80),
--     park_picture VARCHAR(500),
--     rating VARCHAR(4)
-- );


-- CREATE TABLE status(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     status VARCHAR(20)
-- );




-- CREATE TABLE dog_owner_status_park(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     dog_owner_id INT,
--     status_id INT,
--     park_id INT,
--     FOREIGN KEY (dog_owner_id) REFERENCES dog_owner(id),
--     FOREIGN KEY (status_id) REFERENCES status(id),
--     FOREIGN KEY (park_id) REFERENCES parks(id)
-- );

-- INSERT INTO status VALUES (null,"standby");
-- INSERT INTO status VALUES (null,"onTheWay");
-- INSERT INTO status VALUES (null,"inThePark");




