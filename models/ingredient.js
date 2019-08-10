module.exports = function(sequelize, DataTypes) {
    const Ingredient = sequelize.define("Ingredient", {
        fruitLetter: {
            type: DataTypes.STRING
        },
        ingredient_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ingredient_description: {
            type: DataTypes.TEXT
        },
        ingredient_unit: {
            type: DataTypes.STRING
        },
        ingredient_image_url: {
            type: DataTypes.STRING
        },
        ingredient_inventory: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        ingredient_capacity: {
            type: DataTypes.INTEGER
        },
        ingredient_restock_amount: {
            type: DataTypes.INTEGER
        },
        ingredient_restock_price: {
            type: DataTypes.DECIMAL(12,2)
        }
    }, {
        timestamps: false
    });

    Ingredient.associate  = (models) => {
        Ingredient.hasMany(models.Recipe, {
            onDelete: 'cascade'
        });
    }
    return Ingredient;
  };