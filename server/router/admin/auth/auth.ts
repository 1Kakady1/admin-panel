import Router from 'express';
import {User, UserAuth} from "../../../models/users";  
import { Request, Response, NextFunction } from 'express';
import { getAccessToken, getRefreshToken, verifyToken } from '../../../helpers/token';
import {check, validationResult} from 'express-validator';
import { Tokens } from '../../../models/tokens';
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken');
const routerAuth = Router();

routerAuth.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req:Request, res:Response) => {

  try {

      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректный данные при входе в систему'
        })
      }
      const {email, password} = req.body
      const user = await UserAuth.findOne({where: { email }});

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
  
      if (!isMatch) {
        return res.status(400).json({ message: 'Некорректные данные' })
      }

      const refreshToken = await getRefreshToken({userId: user.id, email: user.email},req.useragent)
      const accessToken = getAccessToken({userId: user.id, email: user.email});
   
      res.setHeader('Set-Cookie', `refreshToken=${refreshToken}`);
      res.status(200).json({accessToken,refreshToken,email: user.email, preview: user.preview})

  } catch (e) {
       res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова:' + e })
  }

});

routerAuth.post(
  '/remember-me',
  verifyToken,
  async (req:Request, res:Response) => {

  try {

      const {refreshToken, accessToken} = req.body

      const token = await Tokens.findOne({where: { refreshToken }});
      if (!token) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const user = await User.findOne({where: { id: token.user_id }});
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }
      
      res.status(200).json({accessToken,refreshToken,email: user.email, preview: user.preview})

  } catch (e) {
       res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова:' + e })
  }

});

routerAuth.get(
  '/create_user',
  verifyToken,
  async (req:Request, res:Response) => {
    try{

      const salt = bcrypt.genSaltSync(10);
      const passwordToSave = bcrypt.hashSync("21188245", salt);

      await User.create({ 
        email: "anton2017_96@mail.ru",
        password: passwordToSave,
        isСonfirmed: false,
        preview: null,
     });
     res.status(200).json({ message: "ok"})
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова:' + e })
    }
	  
})

module.exports = routerAuth