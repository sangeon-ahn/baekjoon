// RGB거리에는 집이 N개 있다.
// 인접한 집의 색은 서로 달라야 한다.
// 첫째 줄에는 N이 주어지고,
// 그 다음 줄부터는 빨강, 초록, 파랑으로 칠할 때의 비용이 각각 주어진다.
// ex) 49 33 88
// const N = 3;
// const costs = [[26, 40, 83], [49, 60, 57], [13, 89, 99]];

// for (let i = 1; i < N; i++) {
//   costs[i][0] = Math.min(costs[i - 1][1], costs[i - 1][2]) + costs[i][0];
//   costs[i][1] = Math.min(costs[i - 1][0], costs[i - 1][2]) + costs[i][1];
//   costs[i][2] = Math.min(costs[i - 1][0], costs[i - 1][1]) + costs[i][2];
// }

// console.log(Math.min(...costs[N - 1]));

const input = '3\n26 40 83\n49 60 57\n13 89 99';

console.log(input.split('\n'));
const [N, ...arr] = input.split('\n');
console.log(arr);

const costs = arr.map(nums => nums.split(' ').map(Number));

console.log(costs, N);