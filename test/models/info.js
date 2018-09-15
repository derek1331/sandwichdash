module.exports = function (sequelize, DataTypes) {
  var Info = sequelize.define("Info", {
    // Giving the Author model a name of type STRING
    orderid: {
      type: DataTypes.FLOAT,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    streetaddress: DataTypes.STRING,
    suite_apartment: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
  });

  // Info.associate = function(models) {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  // };
  Info.associate = function (models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Info.hasMany(models.Side, {
      foreignKey: 'orderid'
    }
    );
    Info.hasMany(models.Sandwich, {
      foreignKey: 'orderid'
    }
    );
    Info.hasMany(models.Drink, {
      foreignKey: 'orderid'
    }
    );
    // Info.hasMany(models.Side, {
    //   foreignKey: 'orderid'
    // }
    // );
  };




  return Info;
};


//   Info.hasMany(Side, {
//     foreignKey: 'orderid',
//   });