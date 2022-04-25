const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

apiRouter.get("/api/v1/publishers/:id", controllers.api.v1.publisherController.get);
apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
