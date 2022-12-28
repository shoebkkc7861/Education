const { sequelize, DataTypes, Model } = require("../config/db")


class Files extends Model { }

Files.init({
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
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    leavingCertificate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthCertificate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    aadharCard: {
        type: DataTypes.STRING,
        allowNull: false
    },
    markSheet: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "Files",
    modelName: "Files",
    sequelize
})

// Files
//     .sync()
//     .then(() => { console.log("files table connected successful") })
//     .catch((err) => { console.log(err) })

module.exports = Files