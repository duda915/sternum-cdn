import { checkIfResourceExists } from "../../src/filesystem/utils";
import { addStaticResource } from "../../src/services/StaticResourceService";
import { createTestResource } from "../helper/resourcehelper";

describe("Static Resource Service", () => {
  it("should add static resource in user/sternum-cdn/file/", () => {
    const resource = createTestResource();
    addStaticResource(resource);
    expect(checkIfResourceExists(resource)).toBeTruthy();
  });
});
