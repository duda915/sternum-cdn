import fs from "fs";
import path from "path";
import Resource from "../models/Resource";
import { dataDir } from "./directorysetup";

export function checkIfResourceExists(resource: Resource): boolean {
  const resPath = buildResourcePath(resource);
  return checkIfPathExists(resPath);
}

export function checkIfPathExists(pathToCheck: string): boolean {
  const file = fs.statSync(pathToCheck);
  return file.isFile() || file.isDirectory();
}

export function buildResourcePath(resource: Resource): string {
  return path.join(dataDir, resource.resourceType, resource.resourceName);
}
