const { DataTypes } = require('sequelize');
const {db} = require('../db/db')

const User = db.define('User', {
  id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false
  },
  isСonfirmed:{
    type: DataTypes.BOOLEAN,
    field: 'isСonfirmed'
  },
  preview:{
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
},
{
    tableName: 'users',
    timestamps: true,
    underscored: true,
});

const UserAuth = db.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
},

{
    tableName: 'users',
    timestamps: false,
    underscored: true,
});

export {User,UserAuth}

