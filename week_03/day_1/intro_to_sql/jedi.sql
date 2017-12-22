DROP TABLE IF EXISTS lightsabers;
-- drop table if it already exists
DROP TABLE IF EXISTS jedi;

CREATE TABLE jedi (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  darkside BOOLEAN,
  age INT
);

CREATE TABLE lightsabers (
  id SERIAL PRIMARY KEY,
  hilt_metal VARCHAR(255),
  colour VARCHAR(255),
  owner INT REFERENCES jedi(id)
);



-- add some jedi
INSERT INTO jedi (name, darkside, age)
  VALUES ('Luke', false, 21);

INSERT INTO jedi (name, darkside, age)
  VALUES ('Vader', true, 100);

INSERT INTO jedi (name, age)
  VALUES ('Obiwan', 33);

-- add the lightsabers

INSERT INTO lightsabers (hilt_metal, colour, owner )
    VALUES ('palladium', 'green', 3);

INSERT INTO lightsabers (hilt_metal, colour, owner )
    VALUES ('gold', 'green', 1);

SELECT * FROM lightsabers;


-- --updating
--
-- UPDATE jedi SET darkside = true
--   WHERE name = 'Luke' AND age = 33;
--
-- --reading
--
-- INSERT INTO jedi (name, darkside, age)
--   VALUES ('Anakin', false, 12);
--
-- UPDATE jedi SET age = 22
--   WHERE name = 'Anakin';
--
-- UPDATE jedi SET darkside = true
--   WHERE name = 'Anakin';
--
--
--
-- -- deleting
--
-- DELETE FROM jedi
--   WHERE name = 'Luke';
--
-- SELECT * FROM jedi;
