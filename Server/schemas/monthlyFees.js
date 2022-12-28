const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")

class MonthlyFees extends Model { }

MonthlyFees.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    totalFees: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: "MonthlyFees",
    tableName: "MonthlyFees"
})

// MonthlyFees
//     .sync()
//     .then(() => { console.log("monthlt Fees connected successfull") })
//     .catch(err => { console.log(err) })


module.exports = MonthlyFees