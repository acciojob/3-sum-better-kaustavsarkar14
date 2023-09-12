function threeSum(arr, target) {
// write your code here
  const n = arr.length;
  let closestSum = Infinity;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = arr[i] + arr[j] + arr[k];
        const diff = Math.abs(sum - target);

        if (diff < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
