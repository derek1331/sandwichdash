module.exports = function(sequelize, DataTypes) {
    var Sandwich = sequelize.define("Sandwich", {
      orderid: DataTypes.FLOAT,
      type: DataTypes.STRING,
      bread: DataTypes.STRING,
      veggies: DataTypes.STRING,
      condiments: DataTypes.STRING,
    });

    Sandwich.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Sandwich.belongsTo(models.Info, {
        foreignKey: 'orderid'}
      );
    };
  

    // Sandwich.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Sandwich.belongsTo(models.Info, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Sandwich;
  };
