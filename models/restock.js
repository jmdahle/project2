module.exports = function(sequelize, DataTypes) {
    const Restock = sequelize.define("Restock", {
        restock_cost: {
            type: DataTypes.DECIMAL(12,2),
            allowNull: false
        }
    }, {
        timestamps: true
    });

    Restock.associate  = (models) => {
        Restock.belongsTo(models.Ingredient, {
            onDelete: 'cascade'
        });
    }
    return Restock;
  };