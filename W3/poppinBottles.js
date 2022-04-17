const free_bottles = function(n) {
  //base case 
  if (n === 1) {
    return 0;
  }

  //recursive case
  else {
    return Math.trunc(n/2) + free_bottles(n - Math.trunc(n/2));
  }
}

const free_caps = function(n) {
  //base case 
  if (n < 4) {
    return 0;
  }

  //recursive case
  else {
    return Math.trunc(n/4) + free_caps(Math.trunc(n/4));
  }
}


const recycle = function(initial_amount_spent) {
  //initial data
  let total_bottles_redeemed = 0;

  const initial_bottles = Math.trunc(initial_amount_spent/2)
  const initial_caps = Math.trunc(initial_amount_spent/2)
  let current_bottles = initial_bottles;
  let current_caps = initial_caps

  //console log checks
  // console.log(`You spent: ${initial_amount_spent}$`)
  // console.log(`With which you purchased ${initial_bottles} bottles`)
  // console.log(`Your total amount of empty bottles is ${initial_bottles}`)
  // console.log(`Your total amount of empty caps is ${initial_caps}`)
  // console.log(`Your total amount of REDEEMED bottles is ${total_bottles_redeemed}`)
  // console.log('------------------------------------------------------------------')

  while (current_bottles > 1 || current_caps > 3) {
    const redeemed_bottles = Math.trunc(current_bottles/2)
    total_bottles_redeemed += redeemed_bottles
    const redeemed_caps = (current_caps - current_caps % 4)/4
    if (redeemed_caps > 0) {
      total_bottles_redeemed += redeemed_caps
      current_bottles += redeemed_caps
      current_caps -= redeemed_caps 
    }
    current_bottles -= redeemed_bottles
    current_caps += redeemed_bottles
  }
  
  console.log(total_bottles_redeemed + initial_bottles)
  return total_bottles_redeemed + initial_bottles;
}

recycle(10)
