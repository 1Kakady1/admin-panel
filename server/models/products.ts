const { DataTypes } = require('sequelize');
const {db} = require('../db/db')

const Product = db.define('Product', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preview: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link:{
    type: DataTypes.STRING,
    allowNull: false
  }
  /*createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },

  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }*/
},
{
    tableName: 'products',
    timestamps: false,
    underscored: true,
});

export {Product}

