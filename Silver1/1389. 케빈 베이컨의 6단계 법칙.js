let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().split('\n');

const [nums, ...arr] = input;
const [N, M] = nums.split(' ');

const routes = arr.map(relation => relation.split(' ').map(Number));

const obj = {};

for (let i = 0; i < routes.length; i++) {
  if (!obj[routes[i][0]]) {
    obj[routes[i][0]] = [];
  }
  obj[routes[i][0]].push(routes[i][1]);

  if (!obj[routes[i][1]]) {
    obj[routes[i][1]] = [];
  }
  obj[routes[i][1]].push(routes[i][0]);
}

const visit = new Array(N + 1).fill(0);

// // 풀이 실패
function bfs(N) {
  const queue = [[N, 0]];
  visit[N] = 1;

  while (queue.length) {
    const [n, count] = queue.shift();
    console.log(count);
    // console.log(n);

    for (let i = 0; i < obj[n].length; i++) {
      if (!visit[obj[n][Number(i)]]) {
        visit[obj[n][i]] = 1;

        if (visit.filter(num => num === 0).length === 1) {
          return count;
        }
        queue.push([obj[n][i], count + 1]);
      }
    }
  }
}

// 예시 풀이
const input = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v => +v);
const bacon = new Array(N + 1).fill(0);
const graph = [...new Array(N + 1)].map(() => []);

input.forEach(v => {
  const [start, end] = v.split(' ').map(v => +v);
  graph[start].push(end);
  graph[end].push(start);
});

function bfs(start) {
  const visited = new Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, count] = queue.shift();

    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count++;
      graph[node].forEach(v => queue.push([v, count]));
    }
  }
}

for (let i = 0; i <= N; i++) {
  bfs(i);
}

bacon.shift();

console.log(bacon.indexOf(Math.min(...bacon)) + 1);