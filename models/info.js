module.exports = function (sequelize, DataTypes) {
  var Info = sequelize.define("Info", {
    // Giving the Author model a name of type STRING
    orderid: {
      type: DataTypes.FLOAT,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    building: DataTypes.STRING,
    room_number: DataTypes.STRING,
    details: DataTypes.STRING}, {
      updatedAt: 'order',
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
    Info.hasMany(models.Total, {
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