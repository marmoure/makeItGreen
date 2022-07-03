const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("task",{
    pk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    dateInitiated: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    completedBy: {
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.STRING
    },
    points: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.TEXT
    }
});