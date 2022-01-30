const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/db")

class Product extends Model { }

Product.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    store_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'product' // We need to choose the model name
});

// the defined model is the class itself
console.log(Product === sequelize.models.Product); // true

//Product.sync({ force: true })

module.exports = Product;