function hasTargetSum(array, target) {
  // Write your algorithm here
}
function hasTargetSum(array, target) {
  for(let i = 0; i < array.length; i++){
    let number = array[i]
    for (let x = i + 1; x < array.length; x++){
      let number = array[i];
      if ((number + array[x]) === target) return true

    }

  }
  return false
}