// Full texts	
// id
// username
// email
// password
// name
// lastName
// address
// phone
// role

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db")

class User extends Model { }

User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password : {
        type: DataTypes.STRING,
        allowNull:false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull:false
    },
    address:{
        type: DataTypes.STRING,
        allowNull:true
    },
    phone:{
        type: DataTypes.STRING,
        allowNull:true
    },
    role:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    }

}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'user' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

//User.sync({ force: false })

module.exports = User;