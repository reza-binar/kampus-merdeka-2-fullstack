const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

apiRouter.get("/api/v1/books/:id", controllers.api.v1.bookController.get);
apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
