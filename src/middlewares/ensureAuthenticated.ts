import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
){
  // Receber o token 
  const authToken = request.headers.authorization;
  
  // Validar se o token esta preenchido
  if(!authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split("  ");

  try {
    // Validar se o token eh valido 
    const { sub } = verify( token, "8f8152838fe1b475f0fb86ae9527564d") as IPayload;


    // Recuperar informaçoes do usuario
    request.user_id = sub;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
}