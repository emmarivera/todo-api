const { DataTypes } = require('sequelize');

const db = require('../utils/database');

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING, //? es un varchar (tiene 255 de limitante)
        allowNull: false, //? Es un campo obligatorio
        unique: true
    },
    description: {
        type: DataTypes.TEXT, //? no tiene un limite
        allowNull: false
    },
    is_completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }, 
}, {
    timestamps: false
}
)

module.exports = Tasks