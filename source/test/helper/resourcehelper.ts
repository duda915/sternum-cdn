import fs from "fs";
import path from "path";
import { TextEncoder } from "util";
import Resource from "../../src/models/Resource";

export function createTestResource(): Resource {
  const textEncoder = new TextEncoder();
  const resource = new Resource(textEncoder.encode("test"), "txt");
  return resource;
}

export function createTestImageResource(): Resource {
  const resource = new Resource(getTestImageBuffer(), "png");
  return resource;
}

export function getTestImageBuffer() {
  return fs.readFileSync(path.resolve(__dirname, "sternum-logo.png"));
}
