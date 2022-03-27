function norepeat(i, j, k) {
  var hasil1 = [];
  var hasil2 = [];
  var final = [];
  let isi = 0;
  let cek = 0;
  let x;

  switch (k) {
    case 1:
      for (x = 0; x < i; x++) {
        //Mengisi Kombinasi
        isi++;
        hasil1[x] = isi;
        cek += hasil1[x];

        //Cek jika penjumlahan sudah sama/melebihi total walaupun kombinasi masih sisa
        if (x < i - 1 && (cek === j || cek >= j)) {
          hasil1 = 'No Combinations';
          break;
        }

        //Cek Jika kombinasi sudah full walaupun masih belum sama dengan Total
        if (x === i - 1 && cek !== j) {
          do {
            cek -= isi;
            isi++;
            hasil1[x] = isi;
            cek += hasil1[x];
          } while (cek !== j);
        }

        //Jika di dalam kombinasi ada digit yang melebihi angka 9
        if (hasil1[x] > 9) {
          hasil1 = 'Combination Exceed 1-9 digits !';
        }
      }

      final = [hasil1];
      break;

    case 2:
      for (x = 0; x < i; x++) {
        isi++;
        hasil1[x] = isi;
        cek += hasil1[x];

        //Cek jika penjumlahan sudah sama/melebihi total walaupun kombinasi masih sisa
        if (x < i - 1 && (cek === j || cek >= j)) {
          hasil1 = 'No Combinations';
          break;
        }

        //Cek Jika kombinasi sudah full walaupun masih belum sama dengan Total
        if (x === i - 1 && cek !== j) {
          do {
            cek -= isi;
            isi++;
            hasil1[x] = isi;
            cek += hasil1[x];
          } while (cek !== j);
        }

        //Jika di dalam kombinasi ada digit yang melebihi angka 9
        if (hasil1[x] > 9) {
          hasil1 = 'Combination Exceed 1-9 digits !';
        }
      }

      cek = 0;
      isi = 0;

      for (x = 0; x < i; x++) {
        isi++;

        //Untuk Memastikan kombinasi tidak sama
        if (x == 1) {
          isi++;
        }

        hasil2[x] = isi;
        cek += hasil2[x];

        //Cek jika penjumlahan sudah sama/melebihi total walaupun kombinasi masih sisa
        if (x < i - 1 && (cek === j || cek >= j)) {
          hasil1 = 'No Combinations';
          hasil2 = 'No Combinations';
          break;
        }

        //Cek Jika kombinasi sudah full walaupun masih belum sama dengan Total
        if (x === i - 1 && cek !== j) {
          do {
            cek -= isi;
            isi++;
            hasil2[x] = isi;
            cek += hasil2[x];
          } while (cek !== j);
        }

        //Jika di dalam kombinasi ada digit yang melebihi angka 9
        if (hasil2[x] > 9) {
          hasil2 = 'Combination Exceed 1-9 digits !';
        }
      }

      final = [hasil1, hasil2];
      break;

    default:
      console.log('Incorrect Input!');
      break;
  }

  return final;
}

let jumlahAngka = 3;
let jumlahTotalKombinasi = 6;
let jumlahKombinasi = 3;

console.log('Jumlah Angka Dalam Kombinasi: ', jumlahAngka);
console.log('Total Patokan Kombinasi: ', jumlahTotalKombinasi);
console.log('Jumlah Kombinasi: ', jumlahKombinasi);
console.log('===== HASIL ====');
console.log(norepeat(jumlahAngka, jumlahTotalKombinasi, jumlahKombinasi));
