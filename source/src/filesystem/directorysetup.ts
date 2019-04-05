import fs from "fs";
import os from "os";
import path from "path";

export const dataDir = path.join(os.homedir(), "sternum-cdn", "static");

initializeFileSystem();
function initializeFileSystem() {
  fs.mkdirSync(dataDir, { recursive: true });
}
