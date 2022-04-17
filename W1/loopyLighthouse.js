const multiple = function(number, value) {
  if (number % value === 0) { 
    return true;
  }
  return false;
}

const loopyLighthouse = function(range, multiples, words) {
  for(let x = range[0]; x <= range[1]; x++){
    if (multiple(x, multiples[0]) && multiple(x, multiples[0])) 
      console.log(`${words[0]}${words[1]}`)
    else if (multiple(x, multiples[0]))
      console.log(`${words[0]}`)
    else if (multiple(x, multiples[1]))
      console.log(`${words[1]}`)
    else
      console.log(x)
  }
}
