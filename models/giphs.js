module.exports = function (sequelize, DataTypes) {
    let Giphs = sequelize.define("Giphs", {
        type: {
            type: DataTypes.STRING
        },
        idGiphy: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        },
        title: {
            type: DataTypes.STRING
        },
    },
        {
            freezeTableName: true
        });

    Giphs.associate = function (models) {

        Giphs.belongsTo(models.Articles, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Giphs;

};
