const { Task } = require("../models");
const TaskController = require("./TaskController");

describe("TaskController", () => {
  describe("#handleCreateTask", () => {
    it("should call res.status(200) and res.json with list of task instances", async () => {
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {};

      const tasks = [];

      for (let i = 0; i < 10; i++) {
        const task = new Task({ name, prompt });
        tasks.push(task);
      }

      const mockTaskModel = { findAll: jest.fn().mockReturnValue(tasks) };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const taskController = new TaskController({ taskModel: mockTaskModel });

      await taskController.handleListTasks(mockRequest, mockResponse);

      expect(mockTaskModel.findAll).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(tasks);
    });
  });

  describe("#handleCreateTask", () => {
    it("should call res.status(201) and res.json with task instance", async () => {
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {
        body: {
          name,
          prompt,
        },
      };

      const task = new Task({ name, prompt });
      const mockTaskModel = { create: jest.fn().mockReturnValue(task) };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const taskController = new TaskController({ taskModel: mockTaskModel });

      await taskController.handleCreateTask(mockRequest, mockResponse);

      expect(mockTaskModel.create).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(task);
    });

    it("should call res.status(422) and res.json with task instance", async () => {
      const err = new Error("Something");
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {
        body: {
          name,
          prompt,
        },
      };

      const mockTaskModel = {
        create: jest.fn().mockReturnValue(Promise.reject(err)),
      };

      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn().mockReturnThis(),
      };

      const taskController = new TaskController({ taskModel: mockTaskModel });

      await taskController.handleCreateTask(mockRequest, mockResponse);

      expect(mockTaskModel.create).toHaveBeenCalledWith({
        name,
        prompt,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });
  });

  describe("#handleGetTask", () => {
    it("should call res.status(200) and res.json with task instance", async () => {
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {
        params: {
          id: 1,
        },
      };

      const mockTask = new Task({ name, prompt });
      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn().mockReturnValue(mockTask);

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.json = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleGetTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
    });

    it("should call res.status(404) and res.json with error instance", async () => {
      const err = new Error("Not found!");

      const mockRequest = {
        params: {
          id: 1,
        },
      };

      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn(() => Promise.reject(err));

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.json = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleGetTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(404);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });
  });

  describe("#handleUpdateTask", () => {
    it("should call res.status(200) and res.json with task instance", async () => {
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {
        params: {
          id: 1,
        },
        body: {
          name,
          prompt,
        },
      };

      const mockTask = new Task({ name, prompt });
      mockTask.update = jest.fn().mockReturnThis();

      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn().mockReturnValue(mockTask);

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.json = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleUpdateTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockTask.update).toHaveBeenCalledWith({ name, prompt });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
    });

    it("should call res.status(422) and res.json with error instance", async () => {
      const name = "Hello";
      const prompt = "World";
      const err = new Error("Something");

      const mockRequest = {
        params: {
          id: 1,
        },
        body: {
          name,
          prompt,
        },
      };

      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn(() => Promise.reject(err));

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.json = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleUpdateTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });
  });

  describe("#handleDeleteTask", () => {
    it("should call res.status(204)", async () => {
      const name = "Hello";
      const prompt = "World";

      const mockRequest = {
        params: {
          id: 1,
        },
      };

      const mockTask = new Task({ name, prompt });
      mockTask.destroy = jest.fn();

      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn().mockReturnValue(mockTask);

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.end = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleDeleteTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockTask.destroy).toHaveBeenCalledWith();
      expect(mockResponse.status).toHaveBeenCalledWith(204);
      expect(mockResponse.end).toHaveBeenCalled();
    });

    it("should call res.status(404) and res.json with error instance", async () => {
      const err = new Error("Not found!");

      const mockRequest = {
        params: {
          id: 1,
        },
      };

      const mockTaskModel = {};
      mockTaskModel.findByPk = jest.fn(() => Promise.reject(err));

      const mockResponse = {};
      mockResponse.status = jest.fn().mockReturnThis();
      mockResponse.json = jest.fn().mockReturnThis();

      const taskController = new TaskController({ taskModel: mockTaskModel });
      await taskController.handleDeleteTask(mockRequest, mockResponse);

      expect(mockTaskModel.findByPk).toHaveBeenCalledWith(1);
      expect(mockResponse.status).toHaveBeenCalledWith(422);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    });
  });
});
