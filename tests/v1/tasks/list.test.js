const request = require("supertest");
const app = require("../../../app");
const { Task } = require("../../../app/models");

describe("GET /v1/tasks", () => {
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
      .get("/v1/tasks")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              name,
              prompt,
            }),
          ])
        );
      });
  });
});
