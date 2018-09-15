module.exports = function(sequelize, DataTypes) {
  var Total = sequelize.define("Total", {
    orderid: DataTypes.FLOAT,
    total: DataTypes.INTEGER}, {
      timestamps: false  
    });

    // Side.associate = function(models) {
    //   // We're saying that a Post should belong to an Author
    //   // A Post can't be created without an Author due to the foreign key constraint
    //   Side.belongsTo(models.Info, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    Total.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Total.belongsTo(models.Info, {
        foreignKey: 'orderid'}
      );
    };
  
    // Side.belongsTo(models.Info, {foreignKey: 'orderid', targetKey: 'orderid'});
  
    return Total;
};