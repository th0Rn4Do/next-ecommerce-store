-- Create paintings table

CREATE TABLE paintings (
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
painting_name varchar(200) NOT NULL,
artist_name varchar(50) NOT NULL,
scenery_name varchar(100),
year_of_creation integer NOT NULL,
price_in_euros integer NOT NULL,
slug_name varchar(50)
);

-- Insert some paintings (C in CRUD - Create)

INSERT INTO paintings
  (painting_name, artist_name, scenery_name, year_of_creation, price_in_euros, slug_name)
VALUES
  ('No. 1 - 2023', '"Dall-e Veronese"', 'Brooklyn Bridge NY', '2023', '1739', 'No._1_-_2023'),
  ('No. 2 - 2023', '"Dall-e Veronese"', 'Brooklyn Bridge NY', '2023', '1739', 'No._2_-_2023'),
  ('No. 3 - 2023', '"Dall-e Veronese"', 'Brooklyn Bridge NY', '2023', '1739', 'No._3_-_2023'),
  ('No. 4 - 2023', '"Dall-e Veronese"', 'Brooklyn Bridge NY', '2023', '1739', 'No._4_-_2023'),
  ('No. 5 - 2023', '"Dall-e Veronese"', 'Brooklyn Bridge NY', '2023', '1739', 'No._5_-_2023');

-- Read some paintings (R in CRUD - Read)

SELECT * FROM paintings;
