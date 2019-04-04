import response from "supertest";
import app from "./app";

describe("app", () => {
  it("GET / says hello world", async () => {
    await response(app)
      .get("/")
      .expect(200)
      .expect("hello world");
  });
});
