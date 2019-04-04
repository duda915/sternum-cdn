import { checkIfResourceExists } from "../../src/filesystem/utils";
import { addStaticResource } from "../../src/services/StaticResourceService";
import {
  createTestImageResource,
  createTestResource
} from "../helper/resourcehelper";

describe("Static Resource Service", () => {
  it("should add static resource in home/sternum-cdn/file/", () => {
    const resource = createTestResource();
    addStaticResource(resource);
    expect(checkIfResourceExists(resource)).toBeTruthy();
  });

  it("should add static image in home/sternum-cdn/image/", () => {
    const resource = createTestImageResource();
    addStaticResource(resource);
    expect(checkIfResourceExists(resource)).toBeTruthy();
  });
});
