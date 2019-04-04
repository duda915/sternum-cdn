import fs from "fs";
import path from "path";
import { TextEncoder } from "util";
import Resource from "../../src/models/Resource";
import ResourceType from "../../src/models/ResourceTypes";

export function createTestResource(): Resource {
  const textEncoder = new TextEncoder();
  const resource = new Resource(
    ResourceType.File,
    textEncoder.encode("test"),
    "txt"
  );
  return resource;
}

export function createTestImageResource(): Resource {
  const buffer = fs.readFileSync(path.resolve(__dirname, "sternum-logo.png"));
  const resource = new Resource(ResourceType.Image, buffer, "png");
  return resource;
}
