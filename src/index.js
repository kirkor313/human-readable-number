module.exports = function toReadable (number) {
  let firstTwoTens = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let tens = ["","","twenty","thirty","forty","fifty","sixty", "seventy","eighty","ninety"];
  let hndr = "hundred"
  if (number >=0 && number < 20) {
     return firstTwoTens[number];
  }
  if ((number % 10 == 0) && number < 100) {
    return tens[number/10];
  }
  if ((number % 100 == 0) && (number < 1000 && number >= 100)) {
      return `${firstTwoTens[number/100]} ${hndr}`;
  }
  if (number < 100 && number > 20) { 
    return `${tens[Math.trunc(number/10)]} ${firstTwoTens[number % 10]}`;
  }
  if ((number > 100 && number < 1000) && (number % 10 !== 0 && number % 100 > 20)) {
    return `${firstTwoTens[Math.trunc(number/100)]} ${hndr} ${tens[Math.trunc((number % 100)/10)]} ${firstTwoTens[number % 10]}`;
  }
  if ((number > 100 && number < 1000) && (number % 10 == 0 && number % 100 !== 10)) {
    return `${firstTwoTens[Math.trunc(number/100)]} ${hndr} ${tens[Math.trunc((number % 100)/10)]}`;
  }
  if ((number > 100 && number < 1000) && (number % 10 !== 0 && number % 100 < 10)) {
    return `${firstTwoTens[Math.trunc(number/100)]} ${hndr} ${firstTwoTens[number % 10]}`;
  }
  if ((number > 100 && number < 1000) && (number % 100 > 10 && number % 100 < 20)) {
    return `${firstTwoTens[Math.trunc(number/100)]} ${hndr} ${firstTwoTens[(number % 10) + 10]}`;
  }
  if ((number > 100 && number < 1000) && (number % 100 == 10)) {
    return `${firstTwoTens[Math.trunc(number/100)]} ${hndr} ${firstTwoTens[10]}`;
  }
}
