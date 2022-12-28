const { sequelize, Sequelize, DataTypes, Model } = require("../config/db")


class Details extends Model { }

Details.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
    },
    fatherName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    motherName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        validate: {
            isIn: {
                args: [["male", "female", "transGender"]],
                msg: "input is not male, female or transgender"
            }
        },
        allowNull: false
    },
    maritalStatus: {
        type: DataTypes.STRING,
        defaultValue: "unMarried",
        validate: {
            isIn: {
                args: [["married", "unMarried", "widowed", "divorced"]],
                msg: "select correcte option"
            },
        }
    },
    DOB: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    nationality: {
        type: DataTypes.STRING,
        defaultValue: "indian"
    },
    religion: {
        type: DataTypes.STRING
    },
    cast: {
        type: DataTypes.STRING
    }
}, {
    tableName: "Details",
    modelName: "Details",
    sequelize
})

// Details
//     .sync({ force: true })
//     .then(() => { console.log("Details table connected successful") })
//     .catch((err) => { console.log(err) })

module.exports = Details