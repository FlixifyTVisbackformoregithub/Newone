import { Request, Response } from 'express';
import request from 'request';

export const proxyRequest = (req: Request, res: Response) => {
  const url = req.url.replace('/proxy/', '');
  req.pipe(request(url)).pipe(res);
};
