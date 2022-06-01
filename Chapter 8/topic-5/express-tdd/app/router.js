const express = require("express");
const { Task } = require("./models");
const TaskController = require("./controllers/TaskController");

// Bootstraping Application
const taskController = new TaskController({ taskModel: Task });

const router = express.Router();

router.post("/v1/tasks", taskController.handleCreateTask);
router.get("/v1/tasks", taskController.handleListTasks);
router.get("/v1/tasks/:id", taskController.handleGetTask);
router.put("/v1/tasks/:id", taskController.handleUpdateTask);
router.delete("/v1/tasks/:id", taskController.handleDeleteTask);

module.exports = router;
