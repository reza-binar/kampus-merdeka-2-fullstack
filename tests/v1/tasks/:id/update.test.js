const request = require("supertest");
const app = require("../../../../app");
const { Task } = require("../../../../app/models");

describe("PUT /v1/tasks/:id", () => {
  let task;

  beforeEach(async () => {
    task = await Task.create({
      name: "Test",
      prompt: "Hello",
    });

    return task;
  });

  afterEach(() => task.destroy());

  it("should response with 200 as status code", async () => {
    const name = "Hello";
    const prompt = "World";

    return request(app)
      .put("/v1/tasks/" + task.id)
      .set("Content-Type", "application/json")
      .send({ name, prompt })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            name,
            prompt,
          })
        );
      });
  });

  it("should response with 404 as status code", async () => {
    const name = "Hello";
    const prompt = "World";

    return request(app)
      .put("/v1/tasks/-100")
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
