const { sequelize, DataTypes, Model } = require("../config/db")

class Fees extends Model { }

Fees.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    createdById: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    studentId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    feesPaid: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    paidAt: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW
    },
    otherDetails: {
        type: DataTypes.JSON
    }
}, {
    sequelize,
    modelName: "Fees",
    tableName: "Fees",
    updatedAt: false
})

// Fees
//     .sync({ force: true })
//     .then(() => console.log("fees table connected"))
//     .catch(err => console.log(err))

module.exports = Fees