const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("clipping",{
    pk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    timestamp: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
});