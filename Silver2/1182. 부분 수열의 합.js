// const input = '5 0\n-7 -3 -2 5 8';

// [N, S] = input.split('\n')[0].split(' ');

// const arr = input.split('\n')[1].split(' ').map(num => +num);


// // 풀이 실패
// function solution() {
//   let sum = 0;
//   let count = 0;

//   function dfs(num, index) {
//     sum += num;

//     if (sum === 0) {
//       count++;
//     }

//     for (let i = index + 1; i < arr.length; i++) {
//       dfs(arr[i], i);
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     dfs(arr[i], i);
//   }
// }

// 예시 풀이
// 인자로 인덱스와 합을 받고, 해당 인덱스의 수를 더한 경우와 더하지 않은 경우로 dfs를 한다.

// function dfs(idx, sum) {
//   if (idx >= n) {
//     return;
//   }

//   sum += nums[idx];

//   if (sum === target) {
//     count += 1;
//   }

//   // 더한 값을 없애고
//   dfs(idx + 1, sum - nums[idx]);
//   // 유지 하고
//   dfs(idx + 1, sum);
// }

const [n, target] = [5, 0];
const nums = [-7, -3, -2, 5, 8];
let count = 0;

function dfs(index, sum) {
  if (index >= n) {
    return;
  }

  sum += nums[index];

  if (sum === target) {
    count++;
  }

  dfs(index + 1, sum);
  dfs(index + 1, sum - nums[index]);
}

dfs(0, 0);

console.log(count);