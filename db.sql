
CREATE TABLE IF NOT EXISTS recipes (
    recipe_id INT NOT NULL PRIMARY KEY,
    ingredients VARCHAR(500),
    date_added DATE
);

insert into recipes
values
(1, "5 tomatoes, 4 strawberries, 2 apples", current_timestamp())