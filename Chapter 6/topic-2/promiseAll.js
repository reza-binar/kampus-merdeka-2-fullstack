const axios = require("axios");

// Async with no function
(async () => {
  try {
    // const { data: dataOne } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/1"
    // );
    // const { data: dataTwo } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/2"
    // );
    // const { data: dataThree } = await axios.get(
    //   "https://jsonplaceholder.typicode.com/todos/3"
    // );
    const [{ data: dataOne }, { data: dataTwo }, { data: dataThree }] =
      await Promise.all([
        axios.get("https://jsonplaceholder.typicode.com/todos/1"),
        axios.get("https://jsonplaceholder.typicode.com/todos/2"),
        axios.get("https://jsonplaceholder.typicode.com/todos/3"),
      ]);

    const data = [dataOne, dataTwo, dataThree];
    console.log(data);
  } catch (error) {
    throw error;
  }
})();
