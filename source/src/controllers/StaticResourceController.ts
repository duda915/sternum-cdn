import Express from "express";

export function addStaticResource(req: Express.Request, res: Express.Response) {
  res.send(req.files);
}
