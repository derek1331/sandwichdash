module.exports = function(sequelize, DataTypes) {
  var Side = sequelize.define("Side", {
    orderid: DataTypes.FLOAT,
    sides: DataTypes.STRING}, {
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
    Side.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Side.belongsTo(models.Info, {
        foreignKey: 'orderid'}
      );
    };
  
    // Side.belongsTo(models.Info, {foreignKey: 'orderid', targetKey: 'orderid'});
  
    return Side;
};

// Side.belongsTo(Info, {
//   foreignKey: 'orderid',
// });