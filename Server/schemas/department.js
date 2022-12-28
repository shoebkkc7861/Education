const { DataTypes, Model, Sequelize, sequelize } = require("../config/db")


class Department extends Model { };

Department.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(166),
        allowNull: false,
        unique: true
    },

}, {
    modelName: "Department",
    tableName: "Department",
    sequelize
})

// Department.sync({ force: true })


module.exports = Department