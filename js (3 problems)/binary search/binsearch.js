let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
let num = 40;
let left = 0;
let right = arr.length - 1;
let isFound = false;
while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  if (num == arr[mid]) {
    console.log(mid);
    isFound = true;
    break;
  } else if (num > arr[mid]) {
    left = mid + 1;
  } else if (num < arr[mid]) {
    right = mid - 1;
  }
}
if (!isFound) console.log("Not found");