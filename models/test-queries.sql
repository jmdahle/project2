-- find smoothies we can make from current inventory
select smothiis.* from smothiis where smothiis.id not in (select distinct smothiis.id from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join
ingredients on recipes.ingredientid = ingredients.id
where ingredient_inventory > recipe_amount);

-- test for availability
update ingredients set ingredient_inventory = 1 where ingredient_name = 'bananas';
update ingredients set ingredient_inventory = 4 where ingredient_name = 'bananas';

-- inventory for all items ( 0 or negative should be unavailable smothiis)
select 
	smothii_name, 
    ingredient_name,
    recipe_amount,
    ingredient_inventory,
    (ingredient_inventory - recipe_amount) > 0 as smothii_status
    from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join
	ingredients on recipes.ingredientid = ingredients.id;

-- query to get cost for each ingredient
select 
	smothii_name, 
    ingredient_name,
    recipe_amount,
    ingredient_inventory,
    (ingredient_inventory - recipe_amount) > 0 as smothii_status,
    (ingredient_restock_price/ingredient_restock_amount) as ingredient_unit_price,
    recipe_amount * (ingredient_restock_price/ingredient_restock_amount) as ingredient_cost
    from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join
	ingredients on recipes.ingredientid = ingredients.id
    where Smothiis.id = 2;

-- query to get total ingredient cost of smoothie by id
select 
    Smothiis.id as ID,
	smothii_name,
    smothii_description,
    smothii_creator,
    sum(recipe_amount * (ingredient_restock_price/ingredient_restock_amount)) as total_ingredient_cost,
	'-null-' as null_column
    from smothiis inner join recipes on smothiis.id = recipes.smothiiid inner join
	ingredients on recipes.ingredientid = ingredients.id
    where Smothiis.id = 2
	group by Smothiis.id;
