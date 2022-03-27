function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join('');
  const trueFalse = reverseStr === lowRegStr;

  if (trueFalse) {
    return 'Benar';
  } else {
    return 'Salah';
  }
}

console.log(palindrome('Kasur ini rusak'));
console.log(palindrome('Ibu Ratna antar ubi'));
console.log(palindrome('Kasur Nanaban rusak'));
