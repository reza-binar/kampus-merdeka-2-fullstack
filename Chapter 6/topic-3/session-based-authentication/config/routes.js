const express = require("express");
const controllers = require("../app/controllers");

const appRouter = express.Router();
const apiRouter = express.Router();

appRouter.get("/", controllers.authController.authorizedOnly, controllers.mainController.index)
appRouter.get("/login", controllers.authController.publicOnly, controllers.mainController.login)
appRouter.post("/login", controllers.authController.publicOnly, controllers.authController.login)
appRouter.get("/logout", controllers.authController.authorizedOnly, controllers.authController.logout)


/**
 * Authentication Resource
 * */
apiRouter.post("/api/v1/login", controllers.api.v1.authController.login);
apiRouter.post("/api/v1/register", controllers.api.v1.authController.register);

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);
appRouter.use(apiRouter)

module.exports = appRouter;
