class TaskController {
  constructor({ taskModel }) {
    this.taskModel = taskModel;
  }

  handleListTasks = async (req, res) => {
    const tasks = await this.taskModel.findAll();
    res.status(200).json(tasks);
  };

  handleGetTask = async (req, res) => {
    try {
      const task = await this.taskModel.findByPk(req.params.id);

      if (!task) throw new Error("Task not found!");

      res.status(200).json(task);
    } catch (err) {
      res.status(404).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }
  };

  handleCreateTask = async (req, res) => {
    try {
      const task = await this.taskModel.create({
        name: req.body.name,
        prompt: req.body.prompt,
      });

      res.status(201).json(task);
    } catch (err) {
      res.status(422).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }
  };

  handleUpdateTask = async (req, res) => {
    try {
      const task = await this.taskModel.findByPk(req.params.id);

      if (!task) throw new Error("Task not found!");

      await task.update({
        name: req.body.name,
        prompt: req.body.prompt,
      });

      res.status(200).json(task);
    } catch (err) {
      res.status(422).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }
  };

  handleDeleteTask = async (req, res) => {
    try {
      const task = await this.taskModel.findByPk(req.params.id);

      await task.destroy();

      res.status(204).end();
    } catch (err) {
      res.status(422).json({
        error: {
          name: err.name,
          message: err.message,
        },
      });
    }
  };
}

module.exports = TaskController;
