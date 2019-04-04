import { dataDir } from "../../src/filesystem/directorysetup";
import { checkIfPathExists } from "../../src/filesystem/utils";

describe("Directory Setup", () => {
  it("should initialize data directories", () => {
    const exists = checkIfPathExists(dataDir);
    expect(exists).toBeTruthy();
  });
});
