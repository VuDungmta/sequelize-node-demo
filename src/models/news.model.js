const { DataTypes } = require("sequelize");
module.exports = (sequelize, Sequelize) => {
    const News = sequelize.define("news", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        }
    });
    return News;
};