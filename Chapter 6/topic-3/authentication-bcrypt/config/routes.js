const express = require("express");
const controllers = require("../app/controllers");

const apiRouter = express.Router();

/**
 * Authentication Resource
 * */
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

module.exports = apiRouter;
