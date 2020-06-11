module.exports = function (sequelize, DataTypes) {
    let Giphs = sequelize.define("Giphs", {

        url: {
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
