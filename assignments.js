// Triangle
for (var hash = "#"; hash.length <= 7; hash += "#") {
  console.log(hash);
}
//FizzBuzz
for (var number = 1; number <= 100; number++) {
  var answer = ""
  if (number % 3 === 0) {
    console.log(answer + "Fizz");
    }
  if (number % 5 === 0) {
      console.log(answer + "Buzz");
    }
  else
      console.log(number);
    }

//Chessboard
var even = "#"
var odd = " "
var size = 8

  for (size=0; size <= 8; size += 2) {
    if (size % 2 === 0) {
      console.log(even);
    }
    else {
    console.log(odd);
    }
  }
  

//99 Bottles
