import fs from "fs";
import os from "os";
import path from "path";
import ResourceType from "../models/ResourceTypes";

export const dataDir = path.join(os.homedir(), "sternum-cdn");

initializeFileSystem();
function initializeFileSystem() {
  Object.keys(ResourceType).forEach(type => {
    const dir = path.join(dataDir, type.toLowerCase());
    fs.mkdirSync(dir, { recursive: true });
  });
}
