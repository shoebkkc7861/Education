const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")

class Course extends Model { }

Course.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    courseName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Course",
    modelName: "Course",
    sequelize,
    updatedAt: false
})

// Course
//     .sync({ force: true })
//     .then(() => { console.log("course table connected successfull") })
//     .catch((err) => { console.log(err) })

module.exports = Course