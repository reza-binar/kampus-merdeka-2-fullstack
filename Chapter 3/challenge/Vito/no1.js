function palindromTes(kalimat) {
  var kali = [...kalimat];
  var hasil;
  let i = 0;
  let j = kali.length - 1;

  while (i < j) {
    // Mengubah seluruh huruf jadi huruf kecil
    kali[i] = kali[i].toLowerCase();
    kali[j] = kali[j].toLowerCase();

    //Menentukan Palindrome
    if (kali[i] == kali[j]) {
      i++;
      j--;
    } else {
      return (hasil = 'Salah');
    }
  }
  return (hasil = 'Benar');
}

let sentence = 'Kasur ini rusak';

console.log('Kalimat Palindrome: ', sentence);
console.log('Apakah Kalimat Palindrome: ', palindromTes(sentence));
