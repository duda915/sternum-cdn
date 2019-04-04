import fs from "fs";
import { TextEncoder } from "util";
import Resource from "../../src/models/Resource";
import ResourceType from "../../src/models/ResourceTypes";
import { dataDir } from "../../src/services/directorysetup";
import {
  addStaticResource,
  buildResourcePath
} from "../../src/services/StaticResourceService";

function checkIfResourceExists(resource: Resource): boolean {
  const resPath = buildResourcePath(resource);
  return checkIfPathExists(resPath);
}

function checkIfPathExists(path: string): boolean {
  const file = fs.statSync(path);
  return file.isFile() || file.isDirectory();
}

describe("Directory Setup", () => {
  it("should initialize data directories", () => {
    const exists = checkIfPathExists(dataDir);
    expect(exists).toBeTruthy();
  });
});

describe("Static Resource Service", () => {
  it("should add static resource in user/sternum-cdn/Text/", () => {
    const textEncoder = new TextEncoder();
    const resource = new Resource(
      ResourceType.Text,
      textEncoder.encode("test")
    );

    addStaticResource(resource);
    expect(checkIfResourceExists(resource)).toBeTruthy();
  });
});
