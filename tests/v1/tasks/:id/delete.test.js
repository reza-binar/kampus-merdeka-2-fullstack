const request = require("supertest");
const app = require("../../../../app");
const { Task } = require("../../../../app/models");

describe("DELETE /v1/tasks/:id", () => {
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
    return request(app)
      .delete("/v1/tasks/" + task.id)
      .then((res) => {
        expect(res.statusCode).toBe(204);
      });
  });

  it("should response with 404 as status code", async () => {
    return request(app)
      .delete("/v1/tasks/-100")
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
