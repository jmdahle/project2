module.exports = function(sequelize, DataTypes) {
    const Purchase = sequelize.define("Purchase", {
        smothii_price: {
            type: DataTypes.DECIMAL(12,2),
            allowNull: false
        }
    }, {
        timestamps: true
    });

    Purchase.associate  = (models) => {
        Purchase.belongsTo(models.Smothii, {
            onDelete: 'cascade'
        });
    }
    return Purchase;
  };