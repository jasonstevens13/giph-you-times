module.exports = function (sequelize, DataTypes) {
    let Articles = sequelize.define("Articles", {

        title: {
            type: DataTypes.STRING
        },
        abstract: {
            type: DataTypes.TEXT
        },
        url: {
            type: DataTypes.STRING
        },
        user: {
            type: DataTypes.STRING
        },
    },
        {
            freezeTableName: true
        });

    // Articles.associate = function (models) {
    //     // Associating Articles with Giphs

    //     Articles.hasMany(models.Giphs);
    // };


    return Articles;
};

