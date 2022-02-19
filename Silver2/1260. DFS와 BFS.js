const input = '4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4';
const arr = input.split('\n');

[N, M, V] = arr[0].split(' ').map(num => +num);

const routes = arr.slice(1).map(nums => nums.split(' ').map(num => +num));

const obj = {};

for (const route of routes) {
  if (!obj[route[0]]) {
    obj[route[0]] = [];
  }

  obj[route[0]].push(route[1]);
}

console.log(obj);

function solution() {
  const dfsAnswer = [];
  const bfsAnswer = [];

  let visited = {};

  function dfs(point) {
    if (visited[point]) {
      return;
    }

    dfsAnswer.push(point);

    visited[point] = true;

    if (!obj[point]) {
      return;
    }

    for (let i = 0; i < obj[point].length; i++) {
      dfs(obj[point][i]);
    }
  }

  function bfs(point) {
    visited = {};
    bfsAnswer.push(point);

    const queue = [...obj[point]];

    while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
        const newPoint = queue.shift();

        if (visited[newPoint]) {
          continue;
        }

        bfsAnswer.push(newPoint);

        visited[newPoint] = true;

        if (!obj[newPoint]) {
          continue;
        }

        queue.push(...obj[newPoint]);
      }
    }
  }

  dfs(V);
  bfs(V);

  console.log(...dfsAnswer);
  console.log(...bfsAnswer);
}

solution();