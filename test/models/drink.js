module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
      orderid: DataTypes.FLOAT,
      name: DataTypes.STRING,
      drinks: DataTypes.STRING,
      });

      Drink.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Drink.belongsTo(models.Info, {
          foreignKey: 'orderid'}
        );
      };
    
      // Drink.associate = function(models) {
      //   // We're saying that a Post should belong to an Author
      //   // A Post can't be created without an Author due to the foreign key constraint
      //   Drink.belongsTo(models.Info, {
      //     foreignKey: {
      //       allowNull: false
      //     }
      //   });
      // };

    return Drink;
  };