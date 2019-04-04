import fs from "fs";
import path from "path";
import Resource from "../models/Resource";
import { dataDir } from "./directorysetup";

export function addStaticResource(resource: Resource) {
  fs.writeFileSync(buildResourcePath(resource), resource.resource);
}

export function buildResourcePath(resource: Resource): string {
  return path.join(dataDir, resource.resourceType, resource.resourceName);
}
