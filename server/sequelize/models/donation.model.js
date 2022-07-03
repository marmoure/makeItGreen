const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("donation",{
    pk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.TEXT
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
});