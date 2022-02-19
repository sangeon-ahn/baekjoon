const input = '2\n10 8 17\n0 0\n1 0\n1 1\n4 2\n4 3\n4 5\n2 4\n3 4\n7 4\n8 4\n9 4\n7 5\n8 5\n9 5\n7 6\n8 6\n9 6\n10 10 1\n5 5';

// console.log(input.split('\n'));
[N, ...arr] = input.split('\n');
N = +N;
// const cases = [];
// cases.push()


// 내가 하고 싶은 데이터 정렬
// 배열 하나가 있고, 각각의 요소는 배열이며, 이 배열의 첫 원소도 배열로 가로,세로,개수가 있고, 두번째 원소도 배열인데 여기에는 각각의 좌표를 가지는 배열로 이루어져 있다.
// ex) [
//      [ [10, 8, 17], [[0, 0], [1, 0], [1, 1], [4, 2], ...[1, 1]] ],
//      [ [10, 10, 1], [[1, 1]] ]
//    ]
// 지금은 arr만 있는 상태
// console.log(arr);
const newArr = arr.map(nums => nums.split(' ').map(num => +num));
const specs = [];
const xypoints = [];

for (elem of newArr) {
  if (elem.length === 3) {
    specs.push(elem);
  }
  else {
    xypoints.push(elem);
  }
}

// 풀이 과정
// 1. 객체를 만든다.
// 2. 10x10인 2차원배열의 원소를 돌면서 1이 있으면 객체에 넣고 이 원소의 4방향에 대해 dfs를 수행한다. dfs에서는 우선 객체에 있는지 조사하고 있으면.
//
// console.log(newArr);

const checked = {};
const counts = [];

let twoDimentionArray;

function solution() {
  function dfs(x, y, order) {
    if (x < 0 || x >= specs[order][0] || y < 0 || y >= specs[order][1]) {
      return;
    }

    if (checked[[x, y]]) {
      return;
    }
    if (twoDimentionArray[y][x] === 0) {
      return;
    }

    checked[[x, y]] = true;

    dfs(x - 1, y, order);
    dfs(x + 1, y, order);
    dfs(x, y - 1, order);
    dfs(x, y + 1, order);
  }

  for (let i = 0; i < N; i++) {
    twoDimentionArray = Array.from(Array(specs[i][1]), () => Array(specs[i][0]).fill(0));

    let count = 0;

    for (let j = 0; j < specs[i][2]; j++) {
      [x, y] = xypoints[j];

      twoDimentionArray[y][x] = 1;
    }

    console.log(twoDimentionArray);

    for (let k = 0; k < specs[i][2]; k++) {
      [x, y] = xypoints[k];

      if (!checked[[x, y]]) {
        count++;

        dfs(x, y, i);
      }
    }

    xypoints.splice(0, specs[i][2]);

    counts.push(count);
  }
}

// debugger;
solution();

console.log(counts);
