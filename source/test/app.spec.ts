import request from "supertest";
import app from "../src/app";
import { createTestResource } from "./helper/resourcehelper";

describe("Static file serving", () => {
  it("serves file from data directory", async () => {
    const resource = createTestResource();
    resource.persistResource();

    await request(app)
      .get(resource.resourceURL)
      .expect(200);
  });
});
