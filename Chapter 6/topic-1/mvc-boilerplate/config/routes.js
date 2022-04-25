const express = require("express");
const controllers = require("../app/controllers");

const appRouter = express.Router();
const apiRouter = express.Router();

/** Mount GET / handler */
appRouter.get("/", controllers.main.index);

/**
 * TODO: Implement your own API
 *       implementations
 */
apiRouter.get("/api/v1/posts", controllers.api.v1.post.list);
apiRouter.post("/api/v1/posts", controllers.api.v1.post.create);
apiRouter.put(
  "/api/v1/posts/:id",
  controllers.api.v1.post.setPost,
  controllers.api.v1.post.update
);
apiRouter.get(
  "/api/v1/posts/:id",
  controllers.api.v1.post.setPost,
  controllers.api.v1.post.show
);
apiRouter.delete(
  "/api/v1/posts/:id",
  controllers.api.v1.post.setPost,
  controllers.api.v1.post.destroy
);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);

/**
 * TODO: Delete this, this is just a demonstration of
 *       error handler
 */
appRouter.get("/errors", () => {
  throw new Error(
    "The Industrial Revolution and its consequences have been a disaster for the human race."
  );
});

appRouter.use(apiRouter);

/** Mount Not Found Handler */
appRouter.use(controllers.main.onLost);

/** Mount Exception Handler */
appRouter.use(controllers.main.onError);

module.exports = appRouter;
