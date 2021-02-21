import dotenv from 'dotenv';
import {sign, verify, VerifyErrors} from "jsonwebtoken";
import { Tokens } from '../models/tokens';
import { v4 as uuidv4 } from 'uuid';
import { Details } from 'express-useragent';
import { Request, Response, NextFunction } from 'express';
var os = require('os');
var ip = require('ip');
dotenv.config();

export interface IAccessTokenData{
    userId: number;
    email: string;
}

export const  getAccessToken = (payload:IAccessTokenData) => {
    return sign({userId: payload.userId}, (process.env['TOKEN_SECRET'] as string), { expiresIn: '15min' });
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
      return res.status(403).send({ auth: false, message: 'No token provided.' });
    


    verify( accessToken , process.env["TOKEN_SECRET"] as string, async function(err: VerifyErrors | null, decoded: any) {

        if (err) {
            const token = await Tokens.findOne({where: {refreshToken}})
            if(token && new Date(token.expired_at) > new Date()){
                req.body.accessToken = getAccessToken({userId: decoded.userId, email: decoded.email});
            }else{
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            
        }

        req.body.email = decoded.email;
        req.body.userId = decoded.userId;

        next();
      });
    
  }