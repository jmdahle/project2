
insert into Smothiis (smothii_name, smothii_description, smothii_creator, smothii_image_url, smothii_price, smothii_available, smothii_total_sold, smoothii_category)
values ('Simple Smothii', 'The classic.', 'John', '', 3.99, false, 0, fruit),
('King Kong Smothii', 'For banana-lovers.', 'Tarzan', '', 2.99, false, 0, vege),
('Protein Shocker', 'I got yer bacon right here.', 'Piggy', '', 6.99, false, 0, fruit),
('Appleberry', 'Apples and mixed berries', 'Jane', '', 4.99, false, 0, vege),
('Gucci', 'Why pay less?', 'Solomon', '', 13.99, false, 0, fruit);

-- ingredients are populated by navigating to the route /test/seed/ingredients

insert into recipes (SmothiiId, IngredientId, recipe_amount)
values (1, 1, 1), (1, 2, 1),
(2, 3, 2), (2, 6, 1),
(3, 4, 3), (3, 6, 3),
(4, 1, 1), (4, 5, 1),
(5, 1, 1), (5, 3, 1), (5, 7, 1);

