// const path = require('path');
// const {Router} = require('express')

// //import { v4 as uuidv4  } from 'uuid';
// //const bcrypt = require('bcryptjs')
// // const config = require('config')
// //const {check, validationResult} = require('express-validator')
// //const jwt = require('jsonwebtoken')

// const router = Router();
// const {Product} = require("../model/products");
// const {User} = require("../model/users");  

// const root = path.join(__dirname,"..","build","view");

// // /api/admin/login
// router.get(
//   '/users',
//   async (req:any, res:any) => {
//     //const users = await User.findAll();
//     const user = await User.findOne({ where: { email: 'email' } })
// 	  res.status(200).json({ message: user})
// })

// router.post(
//   '/home',
//   async (req:any, res:any) => {
//     const product = await Product.findAndCountAll({limit: 10});
// 	  return res.status(200).json(product)
// })

// router.get(
//   '/products',
//   async (req:any, res:any) => {
//     const product = await Product.findAndCountAll({limit: 10});
// 	  return res.status(200).json(product)
// })


// router.get(
//   '/test',
//   async (req:any, res:any) => {
//     const users = await User.findAll();
// 	  return res.status(200).json(users)
// })

// module.exports = router