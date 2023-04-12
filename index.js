function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const currentNumber = array[i];
    for (let j = i + 1; j < array.length; j++){
      if (currentNumber + array[j] === target)
      return true
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  Given an input array of n elements, the worst case scenario is that the algorithm needs to make n^2 iterations
*/

/* 
  Add your pseudocode here
  initialize a function called hasTargetSum taking the arguments array and target

*/

/*
  Add written explanation of your solution here
  Come up with a function named hasTargetSum, which will take two arguments. Those arguments being an array of integers, and one target integer. If any two numbers in the array add up to the target number, return true. otherwise, return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
