const { sequelize, DataTypes, Model, Sequelize } = require("../config/db")

class StaffSalary extends Model { }

StaffSalary.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    staffId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalSalary: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
    ,
    salaryDetails: {
        type: DataTypes.JSON,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    createdById: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    otherDetails: {
        type: DataTypes.JSON
    }
}, {
    modelName: "StaffSalary",
    tableName: "StaffSalary",
    sequelize
})


// StaffSalary.sync({ force: true })

module.exports = StaffSalary