module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    name: DataTypes.STRING,
    bread: DataTypes.STRING,
    meat: DataTypes.STRING,
    cheese: DataTypes.STRING,
    veggies: DataTypes.STRING,
    condiments: DataTypes.STRING,
    chips: DataTypes.STRING,
    drinks: DataTypes.STRING,
    });
  return Order;
};


