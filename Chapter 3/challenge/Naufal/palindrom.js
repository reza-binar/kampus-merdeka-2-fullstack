function palindrome(str) {
  var newStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  var newStrRev = newStr.split('').reverse().join('');
  return newStr == newStrRev;
}

let test = console.log(palindrome('Ibu Ratna antar ubi'));
