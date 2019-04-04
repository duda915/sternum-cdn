import fs from "fs";
import request from "supertest";
import app from "../src/app";
import { buildResourcePath, buildResourceURL } from "../src/filesystem/utils";
import { createTestResource } from "./helper/resourcehelper";

describe("Static file serving", () => {
  it("serves file from data directory", async () => {
    const resource = createTestResource();
    const path = buildResourcePath(resource);
    fs.writeFileSync(path, resource.resource);

    const req = await request(app)
      .get(buildResourceURL(resource))
      .expect(200);
  });
});
