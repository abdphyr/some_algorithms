
// This factorial function by made recursion 

const factorial = (number: number): number => {
  if (number === 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}

console.log(factorial(5))