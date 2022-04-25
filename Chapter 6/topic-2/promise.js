const axios = require("axios");

// Promise
axios
  .get("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    throw error;
  });

// Async Await
async function getTodo() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    console.log(response.data);
  } catch (error) {
    throw error;
  }
}
getTodo();

// Async with no function
(async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/3"
    );
    console.log(response.data);
  } catch (error) {
    throw error;
  }
})();
