USE kelev_app;

-- CREATE TABLE dogs (
--     dog_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     dog_name VARCHAR(20),
--     dog_picture VARCHAR(80),
--     gender VARCHAR(6),
--     age TINYINT,
--     weight TINYINT,
--     vaccinated BOOLEAN,
--     neutered BOOLEAN,
--     dog_status TINYINT DEFAULT 1
-- );

    -- DELETE FROM owners WHERE owners.id = 23;

-- CREATE TABLE owners(
--     owner_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     owner_name VARCHAR(50),
--     owner_picture VARCHAR(80),
--     email VARCHAR(80),
--     owner_status TINYINT DEFAULT 1
-- );

-- CREATE TABLE dog_owner(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     owner_id INT,
--     dog_id INT,
--     FOREIGN KEY (owner_id) REFERENCES owners(owner_id),
--     FOREIGN KEY (dog_id) REFERENCES dogs(dog_id)
-- );


-- CREATE TABLE parks(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     park_name VARCHAR(50),
--     lng VARCHAR(20),
--     lat VARCHAR(20),
--     address VARCHAR(80),
--     park_pictures VARCHAR(8000),
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


-- INSERT INTO owners VALUES (null,"Gili Sinai","./src/pictures/Screenshot_20191226-093707_Gallery","gilisinai@gmail.com",1);
--  UPDATE dogs SET dog_picture = '/images/loyee.jpg' WHERE dogs.id = 22;
--  UPDATE dogs SET dog_picture = '/images/loyee.jpg' WHERE dogs.id = 22;
-- INSERT INTO dog_owner VALUES (null,22,21);
-- INSERT INTO dog_owner VALUES (null,22,22);
-- INSERT INTO dog_owner VALUES (null,22,23);

--  UPDATE dogs SET dog_name = 'Louie' WHERE dogs.id = 22;
--  UPDATE dog_owner SET dog_id = 24 WHERE dog_owner.dog_id = 21 AND dog_owner.owner_id = 22;



