// public int maxMirror(int[] nums) {
//   int len = nums.length;
//   int count= 0;
//   int max = 0;
//   for (int i = 0; i < len; i++){
//     count=0;
//     for (int j = len-1; i + count < len && j > -1; j--){
//       if(nums[i+count] == nums[j]){
//         count++;
//       }
//       else{
//         if (count > 0){
//           max = Math.max(count,max);
//           count = 0;
//         }
//       }
//     }
//     max = Math.max(count,max);
//   }
//   return max;

function maxMirror(arr) {
  let mirrorCount = 0;
  let maxNum = 0;
  for (let i = 0; i < arr.length; i++) {
    mirrorCount = 0;
    for (let j = arr.length - 1; j > -1 && i + mirrorCount < arr.length; j++) {
      if (arr[i + mirrorCount] === arr[j]) {
        mirrorCount++;
      } else {
        if (mirrorCount > 0) {
          maxNum = Math.max(mirrorCount, maxNum);
          mirrorCount = 0;
        }
      }
    }
  }
  maxNum = Math.max(mirrorCount, maxNum);
  return maxNum;
}
console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1]));
