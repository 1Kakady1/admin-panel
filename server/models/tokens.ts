const { DataTypes } = require('sequelize');
const {db} = require('../db/db')

const Tokens = db.define('Tokens', {
  refreshToken: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'refreshToken'
  },
  ua:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'ua'
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  ip:{
    type: DataTypes.STRING,
    allowNull: false,
    field: 'ip'
  },
  expiresIn:{
    type: DataTypes.BIGINT,
    field: 'expiresIn'
  },
  fingerprint:{
    type: DataTypes.STRING,
    field: 'fingerprint'
  },
  expired_at:{
    type: DataTypes.DATE,
    field: 'expired_at'
  }
},
{
    tableName: 'refresh_sessions',
    timestamps: false,
    underscored: true,
});



export {Tokens}

