module.exports = function(sequelize, DataTypes) {
    const Smothii = sequelize.define("Smothii", {
        smothii_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        smothii_description: {
            type: DataTypes.TEXT
        },
        smothii_creator: {
            type: DataTypes.STRING
        },
        smothii_image_url: {
            type: DataTypes.STRING
        },
        smothii_price: {
            type:  DataTypes.DECIMAL (12,2),
            defaultValue: 0
        },
        smothii_available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        smothii_total_sold: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        smothii_category: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    }, {
        timestamps: false
    });

    Smothii.associate  = (models) => {
        Smothii.hasMany(models.Recipe, {
            onDelete: 'cascade'
        });
    }
    return Smothii;
  };
