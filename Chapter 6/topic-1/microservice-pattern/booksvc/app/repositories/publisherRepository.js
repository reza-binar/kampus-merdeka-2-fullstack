const axios = require("axios")

module.exports = {
  async find(id) {
    const response = await axios.get("http://localhost:8002/api/v1/publishers/" + id)

    return response.data?.data;
  }
}
