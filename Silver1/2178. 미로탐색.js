// let fs = require('fs');
// let input = fs.readFileSync('예제.txt').toString().split('\n');

// const [nums, ...arr] = input;

// const [N, M] = nums.split(' ').map(Number);

// const miro = arr.map(line => line.split('').map(Number));

// let minCount = Infinity;

// // dfs 실패
// function dfs(x, y, count) {
//   if (x < 0 || y < 0 || x > N - 1 || y > M - 1) {
//     return;
//   }

//   if (!miro[x][y]) {
//     return;
//   }

//   if (x === N - 1 && y === M - 1) {
//     minCount = Math.min(minCount, count);
//     return;
//   }

//   // if (x !== N - 1 && y !== M - 1) {
//   //   miro[x][y] = 0;
//   // }

//   dfs(x - 1, y, ++count);
//   dfs(x + 1, y, ++count);
//   dfs(x, y - 1, ++count);
//   dfs(x, y + 1, ++count);
// }

// // 풀이 실패
// function bfs(x, y) {
//   const queue = [[x, y, 1]];

//   while (queue.length) {
//     const [xP, yP, time] = queue.shift();

//     if (xP === N - 1 && yP === M - 1) {
//       minCount = Math.min(minCount, time);
//       return;
//     }

//     for (const position of [[xP - 1, yP], [xP + 1, yP], [xP, yP - 1], [xP, yP + 1]]) {
//       if (miro[position[0]][position[1]] && position[0] >= 0 && position[0] <= N - 1 && position[1] >= 0 && position[1] <= M - 1) {
//         miro[position[0]][position[1]] = 0;

//         queue.push([position[0], position[1], time + 1]);
//       }
//     }
//   }
// }

// 다른사람 풀이

const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');

const [yMax, xMax] = input.shift().split(" ");

const map = input.map(v => v.split("").map(x => +x));

const queue = [[0, 0, 1]];

const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
];

while (queue.length) {
  const [x, y, time] = queue.shift();

  for (let i = 0; i < dir.length; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (0 <= xPos && 0 <= yPos && xPos < xMax && yPos < yMax) {
      if (map[yPos][xPos] === 1) {
        map[yPos][xPos] = time + 1;
        queue.push([xPos, yPos, time + 1]);
      }
    }
  }
}

console.log(map[yMax - 1][xMax - 1]);