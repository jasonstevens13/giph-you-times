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


    return Articles;
};

