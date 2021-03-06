const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("tree",{
    pk: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    id: {
        allowNull:false,
        unique:true,
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING
    },
    plantationDate: {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    NFCTag: {
        allowNull:true,
        type: DataTypes.STRING,
    },
    comment: {
        allowNull:true,
        type: DataTypes.TEXT,
    },
    batchNumber: {
        allowNull:true,
        type: DataTypes.INTEGER
    }
});