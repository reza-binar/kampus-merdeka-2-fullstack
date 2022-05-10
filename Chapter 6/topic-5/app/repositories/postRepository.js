const { Post } = require("../models");

module.exports = {
  create(createArgs) {
    return Post.create(createArgs);
  },

  update(id, updateArgs) {
    return Post.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Post.destroy({ where: { id } });
  },

  restore(id) {
    return Post.restore({ where: { id } });
  },

  find(id) {
    return Post.findByPk(id);
  },

  findAll(showDeleted = true) {
    return Post.findAll({
      paranoid: !showDeleted,
    });
  },

  getTotalPost(showDeleted = true) {
    return Post.count({
      paranoid: !showDeleted,
    });
  },
};
