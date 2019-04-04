import { TextEncoder } from "util";
import { dataDir } from "../../src/filesystem/directorysetup";
import { checkIfPathExists, checkIfResourceExists } from "../../src/filesystem/utils";
import Resource from "../../src/models/Resource";
import ResourceType from "../../src/models/ResourceTypes";
import { addStaticResource } from "../../src/services/StaticResourceService";

describe("Directory Setup", () => {
  it("should initialize data directories", () => {
    const exists = checkIfPathExists(dataDir);
    expect(exists).toBeTruthy();
  });
});

describe("Static Resource Service", () => {
  it("should add static resource in user/sternum-cdn/text/", () => {
    const textEncoder = new TextEncoder();
    const resource = new Resource(
      ResourceType.File,
      textEncoder.encode("test")
    );

    addStaticResource(resource);
    expect(checkIfResourceExists(resource)).toBeTruthy();
  });
});
