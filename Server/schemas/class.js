const { sequelize, DataTypes, Sequelize, Model } = require("../config/db")

class Class extends Model { }

Class.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    courseId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fees: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    maxStudent: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    otherDetails: {
        type: DataTypes.JSON
    }
}, {
    sequelize,
    modelName: "Class",
    tableName: "Class"
})

// Class
//     .sync({ force: true })
//     .then(() => console.log("Class table connected successfull"))
//     .catch((err) => { console.log(err) })


module.exports = Class