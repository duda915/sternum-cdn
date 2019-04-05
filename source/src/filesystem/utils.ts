import fs from "fs";

export function checkIfPathExists(pathToCheck: string): boolean {
  const file = fs.statSync(pathToCheck);
  return file.isFile() || file.isDirectory();
}
