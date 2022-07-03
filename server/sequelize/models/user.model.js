const { DataTypes, Sequelize } = require('sequelize');

module.exports = (sequelize) => sequelize.define("user",{
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
    usrname: {
        allowNull: false,
        type: DataTypes.STRING
    },
    passwd: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    location: {
        allowNull:true,
        type: DataTypes.STRING,
    },
    points: {
        allowNull:true,
        type: DataTypes.INTEGER,
    },
    type: {
        allowNull:true,
        type: DataTypes.STRING
    }
});