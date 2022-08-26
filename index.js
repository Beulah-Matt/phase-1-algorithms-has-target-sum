function hasTargetSum(array, target) {
  // Write your algorithm here
 
  for (i =0; i< array.length; i ++){
    for (j= (i + 1); j<array.length; j++)
    if (array[i]+ array[j] == target){
      return true
    }
    
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  n(log n)
*/

/* 
  Add your pseudocode here
  Ensure an element is not added onto itself
  loop through the array and get sums
   if array [i] + array [j] = x
   return true
   else
   return false
  [1, 4.6,8], 14 -> true, 6+8=14
*/

/*
  Add written explanation of your solution here
  I need to find a function that adds two elements in an array and checks if any of the sums add up to a given number
  I have initialized the first element with [i] and the second with j= [i]+1 to skip over an already picked number
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
}

module.exports = hasTargetSum;
