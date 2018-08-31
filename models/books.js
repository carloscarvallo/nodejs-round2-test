'use strict';
module.exports = (sequelize, DataTypes) => {
  const Books = sequelize.define('Books', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Books.associate = function(models) {
    // associations can be defined here
  };
  return Books;
};