let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split(' ');

const [N, K] = input.map(num => +num);

let smallestCount = Infinity;

// function dfs(position, count) {
//   if (N >= K) {
//     return K - N;
//   }

//   if (count > 100) {
//     return;
//   }

//   if (count >= smallestCount) {
//     return;
//   }

//   if (position < 0) {
//     return;
//   }

//   if (position === K) {
//     smallestCount = Math.min(smallestCount, count);

//     return;
//   }

//   dfs(position - 1, count++);
//   dfs(position + 1, count++);
//   dfs(2 * position, count++);
// }

// dfs(N, 0);

// console.log(smallestCount);

// 다른사람 풀이
const visit = new Array(100100).fill(0);

function bfs(position) {
  const queue = [];

  queue.push([position, 0]);
  visit[N] = 1;

  while (queue.length) {
    const [cur, time] = queue.shift();

    if (cur === K) {
      return time;
    }

    for (const next of [cur - 1, cur + 1, cur * 2]) {
      if (!visit[next] && next >= 0 && next <= 100000) {
        visit[next] = 1;
        queue.push([next, time + 1]);
      }
    }
  }
}

console.log(bfs(N));
