// function that prints the reverse of a number
function reverseNumberFunc(num) {
  let reversedNum = 0;
  while (num > 0) {
    const lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  console.log(reversedNum);
}

reverseNumberFunc(14544);
