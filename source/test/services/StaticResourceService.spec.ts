import { checkIfPathExists } from "../../src/filesystem/utils";
import { addStaticResource } from "../../src/services/StaticResourceService";
import { getTestImageBuffer } from "../helper/resourcehelper";

describe("Static Resource Service", () => {
  it("should add static resource in data dir", () => {
    const resource = addStaticResource("test.txt", getTestImageBuffer());
    expect(checkIfPathExists(resource.getTargetPhysicalPath())).toBeTruthy();
  });
});
