const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/tasks", () => {
  it("should response with 201 as status code", async () => {
    const name = "Hello";
    const prompt = "World";

    return request(app)
      .post("/v1/tasks")
      .set("Content-Type", "application/json")
      .send({ name, prompt })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            ...res.body,
            name,
            prompt,
          })
        );
      });
  });

  it("should response with 422 as status code", async () => {
    const name = [];
    const prompt = {};

    return request(app)
      .post("/v1/tasks")
      .set("Content-Type", "application/json")
      .send({ name, prompt })
      .then((res) => {
        expect(res.statusCode).toBe(422);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: {
              name: expect.any(String),
              message: expect.any(String),
            },
          })
        );
      });
  });
});
