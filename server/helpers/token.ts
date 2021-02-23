import dotenv from 'dotenv';
import {sign, verify, VerifyErrors} from "jsonwebtoken";
import { Tokens } from '../models/tokens';
import { v4 as uuidv4 } from 'uuid';
import { Details } from 'express-useragent';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/users';
var os = require('os');
var ip = require('ip');
dotenv.config();

export interface IAccessTokenData{
    userId: number;
    email: string;
}

export const  getAccessToken = (payload:IAccessTokenData) => {
    return sign({userId: payload.userId, email: payload.email}, (process.env['TOKEN_SECRET'] as string), { expiresIn: '15min' });
}

export const getRefreshToken = async (payload:IAccessTokenData, useragent?: Details) => {

    const {userId} = payload;

    if(useragent){
        const userRefreshTokens = await Tokens.findAll({where: { user_id: userId }});

        if (userRefreshTokens.length >= 5) {
            await Tokens.destroy({where: { user_id: payload.userId }})
        };
    
        const refreshToken = uuidv4();
    
        await Tokens.create({ 
            refreshToken: refreshToken,
            ua: useragent.browser,
            user_id: userId,
            ip: ip.address(),
            expiresIn: 12,
            fingerprint: "not work",
         });
        
        return refreshToken;
    } else {
        new Error('Error useragent')
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let {refreshToken, accessToken} = req.body;

    if (!refreshToken || !accessToken)
      return res.status(403).send({ error: 'No token provided.' });
    


    verify( accessToken , process.env["TOKEN_SECRET"] as string, async function(err: VerifyErrors | null, decoded: any) {
        
        let email:string = decoded && decoded.email || "";
        let userId:number = decoded && decoded.userId || 0;
        
        if (err) {
            const token = await Tokens.findOne({where: {refreshToken}})
            //TODO: check user ip and ect
            if(token && new Date(token.expired_at) > new Date()){

                const user = await User.findOne({where: { id: token.user_id }});

                if(user){
                    req.body.accessToken = getAccessToken({userId: user.id, email: user.email});
                    email = user.email;
                    userId = user.id;
                } else {
                    return res.status(500).send({ error: 'Failed to authenticate token.' });
                }
               
            }else{
                return res.status(500).send({ error: 'Failed to authenticate token.' });
            }
            
        }
        
        req.body.email = email;
        req.body.userId = userId;

        next();
      });
    
  }