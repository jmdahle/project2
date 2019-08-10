module.exports = function(sequelize, DataTypes) {
    const Recipe = sequelize.define("Recipe", {
        recipe_amount: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    });

    Recipe.associate  = (models) => {
        Recipe.belongsTo(models.Smothii, {
            foreignKey: {
                allowNull: false
            }
        });
        Recipe.belongsTo(models.Ingredient, {
            foreignKey: {
                allowNull: false
            }
        });
    }
    return Recipe;
  };