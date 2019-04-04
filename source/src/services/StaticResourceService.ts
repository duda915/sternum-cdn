import fs from "fs";
import { buildResourcePath } from "../filesystem/utils";
import Resource from "../models/Resource";

export function addStaticResource(resource: Resource) {
  fs.writeFileSync(buildResourcePath(resource), resource.resource);
}
