function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini

  /* Cara 1: Native */
  for (const car of cars) {
    // Jika property available dari object car = true, maka element di "push" ke array result
    if (car.available === true) result.push(car);
  }

  /* Cara 2: menggunakan fungsi bawaan javascript */
  // cars.forEach((car) => {
  //   // Jika property available dari object car = true, maka element di "push" ke array result
  //   if (car.available === true) result.push(car);
  // });

  // Hasil Filter
  console.table(result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
