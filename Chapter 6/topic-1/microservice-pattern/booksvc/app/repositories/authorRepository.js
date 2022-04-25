const axios = require("axios")

module.exports = {
  async find(id) {
    const response = await axios.get("http://localhost:8000/api/v1/authors/" + id)

    return response.data?.data;
  }
}
