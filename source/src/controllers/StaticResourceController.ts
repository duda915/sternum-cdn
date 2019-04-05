import Express from "express";
import * as StaticResourceService from "../services/StaticResourceService";

export function addStaticResource(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction
) {
  const { originalname, buffer } = req.file;

  try {
    const resource = StaticResourceService.addStaticResource(
      originalname,
      buffer
    );
    res.send(resource);
  } catch (err) {
    next(err);
  }
}
