module.exports = (sequelize, DataTypes) =>{
  const Image = sequelize.define("image", {
    type: {
      type: DataTypes.STRING,
    },
    vumark_id: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    data: {
      type: DataTypes.BLOB("long"),
    },
  });

  return Image;
};
