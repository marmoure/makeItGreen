const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("pic",{
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
    path: {
        allowNull:true,
        type: DataTypes.STRING
    }
});