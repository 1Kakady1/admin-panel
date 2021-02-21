import Router from 'express';
import {Product} from "../../../models/products";  

const routerProducts = Router();

routerProducts.get(
  '/',
  async (req:any, res:any) => {
    const product = await Product.findAndCountAll({limit: 10});
	  return res.status(200).json(product)
})


module.exports = routerProducts