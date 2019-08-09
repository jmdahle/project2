
insert into Smothiis (smothii_name, smothii_description, smothii_creator, smothii_image_url, smothii_price, smothii_available, smothii_total_sold)
values ('Simple Smothii', 'The classic.', 'John', '', 3.99, false, 0),
('King Kong Smothii', 'For banana-lovers.', 'Tarzan', '', 2.99, false, 0),
('Protein Shocker', 'I got yer bacon right here.', 'Piggy', '', 6.99, false, 0),
('Appleberry', 'Apples and mixed berries', 'Jane', '', 4.99, false, 0),
('Gucci', 'Why pay less?', 'Solomon', '', 13.99, false, 0);

insert into Ingredients (ingredient_name, ingredient_unit, ingredient_inventory, ingredient_capacity, ingredient_restock_amount, ingredient_restock_price)
values ('strawberries', 'cup', 20, 20, 10, 1.00),
('oranges', 'cup', 20, 20, 10, 1.25),
('bananas', 'cup', 20, 20, 10, 0.75),
('bacon', 'tbsp', 20, 20, 5, 1.10),
('apples', 'cup', 20, 20, 10, 1.45),
('protein powder', '1/4 cup', 40, 40, 20, 1.00),
('gold', 'oz', 5, 5, 1, 4.55);

insert into recipes (SmothiiId, IngredientId, recipe_amount)
values (1, 1, 1), (1, 2, 1),
(2, 3, 2), (2, 6, 1),
(3, 4, 3), (3, 6, 3),
(4, 1, 1), (4, 5, 1),
(5, 1, 1), (5, 3, 1), (5, 7, 1);

