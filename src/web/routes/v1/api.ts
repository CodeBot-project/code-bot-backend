import express, { Request, Response } from 'express'
import { ErrorResponse } from './response.types';

export const rootRoute = express.Router();

rootRoute.get('/live', (req: Request, res: Response) => {
  res.status(200).send("Server is up");
})

rootRoute.get('/generate', (req: Request, res: Response) => {
  res.status(501).json({
    msg: "Not implemented yet"
  } as ErrorResponse);
})

