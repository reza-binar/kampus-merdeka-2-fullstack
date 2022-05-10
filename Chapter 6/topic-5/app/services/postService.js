const postRepository = require("../repositories/postRepository");

module.exports = {
  create(requestBody) {
    return postRepository.create(requestBody);
  },

  update(id, requestBody) {
    return postRepository.update(id, requestBody);
  },

  delete(id) {
    return postRepository.delete(id);
  },

  restore(id) {
    return postRepository.restore(id);
  },

  async list(showDeleted = true) {
    try {
      const posts = await postRepository.findAll(showDeleted);
      const postCount = await postRepository.getTotalPost(showDeleted);

      return {
        data: posts,
        count: postCount,
      };
    } catch (err) {
      throw err;
    }
  },

  get(id) {
    return postRepository.find(id);
  },
};
