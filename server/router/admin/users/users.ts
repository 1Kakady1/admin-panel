import Router from 'express';
import {User} from "../../../models/users";  

const routerUser = Router();

routerUser.get(
  '/',
  async (req:any, res:any) => {
    //const users = await User.findAll();
    const user = await User.findOne({ where: { email: 'anton2016_96@mail.ru' } })
	  res.status(200).json({ message: user})
})

module.exports = routerUser