const { Sequelize, sequelize, Model, DataTypes } = require("../config/db")

class Attend extends Model { }

Attend.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    createdById: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    attendance: {
        type: DataTypes.INTEGER
    },
    date: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
    }

}, {
    tableName: "Attend",
    modelName: "Attend",
    updatedAt: false,
    sequelize
})

// Attend
//     .sync({ force: true })
//     .then(() => { console.log("database connected succses full") })
//     .catch(err => console.log(err))

module.exports = Attend