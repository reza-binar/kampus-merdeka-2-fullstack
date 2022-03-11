function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  /* Cara 1: Native */
  // Bubble sorting Logic (Descending)
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      // Misal: Jika Array index 0 memiliki nilai year lebih kecil dari Array index 1
      // maka lakukan "Swap"
      if (result[j].year < result[j + 1].year) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  /* Cara 2: Menggunakan fungsi bawaan javascript */
  // result.sort((a, b) => {
  //   // Mengurutkan secara descending order
  //   return b.year - a.year;
  // });

  console.table(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
