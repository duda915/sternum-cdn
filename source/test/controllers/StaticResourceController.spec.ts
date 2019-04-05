import fs from "fs";
import path from "path";
import request from "supertest";
import app from "../../src/app";

describe("Static Resource Controller", () => {
  it("POST /add - creates static resource from request and adds to storage", async () => {
    const image = fs.readFileSync(
      path.resolve(__dirname, "..", "helper", "sternum-logo.png")
    );

    await request(app)
      .post("/add")
      .attach("resource", image, { filename: "sternum-logo.png" })
      .expect(200);
  });

  it("POST /add - post file without extenstion, should throw error", async () => {
    const image = fs.readFileSync(
      path.resolve(__dirname, "..", "helper", "sternum-logo.png")
    );

    await request(app)
      .post("/add")
      .attach("resource", image, { filename: "sternum-logo" })
      .expect(400)
      .expect("unknown extension");
  });
});
