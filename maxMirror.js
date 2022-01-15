const test = [11, 22, 33, 8, 4, 5, 6, 43, 9, 33, 22, 11];

function maxMirror(arr) {
  let largestMirrorSection = 0;
  let currentCount = 0;
  for (let i = 0; i < arr.length; i++) {
    currentCount = 0;
    for (let j = arr.length; j > -1 && i + currentCount < arr.length; j--) {
      if (arr[i + currentCount] === arr[j]) {
        currentCount++;
      } else {
        largestMirrorSection = Math.max(currentCount, largestMirrorSection);
        currentCount = 0;
      }
    }
    largestMirrorSection = Math.max(currentCount, largestMirrorSection);
  }
  return largestMirrorSection;
}

console.log(maxMirror(test));
