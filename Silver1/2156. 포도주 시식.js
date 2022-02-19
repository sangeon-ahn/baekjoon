let fs = require('fs');
let input = fs.readFileSync('예제.txt').toString().trim().split('\n');

const [n, ...arr] = input;

const amounts = arr.map(Number);

let max = -100;

console.log(n, amounts);

// 풀이 실패
function dfs(n, amount, consec) {
  console.log(amount);
  if (n >= amounts.length) {
    // console.log(amount);
    max = Math.max(max, amount);

    return;
  }

  if (consec >= 2 && n + 1 < amounts.length - 2) {
    dfs(n + 2, amount + amounts[n + 1], 1);
  } else {
    dfs(n + 1, amount + amounts[n], consec + 1);
    // dfs(n + 2, amount + amounts[n], 0);
  }
}

// 예시 풀이
// dp로 푸는 문제다.
// dp는 아직 제대로 공부가 안된 상태
let fs = require('fs');
let wine = fs.readFileSync('예제.txt').toString().split('\n').map(Number);
const number = wine[0];

const dp = new Array(number + 1);

dp[1] = wine[1];
dp[2] = wine[1] + wine[2];
dp[3] = Math.max(wine[1] + wine[2], wine[1] + wine[3], wine[2] + wine[3]);

for (let n = 4; n <= number; n++) {
  dp[n] = Math.max(
    dp[n - 3] + wine[n - 1] + wine[n],
    dp[n - 2] + wine[n],
    dp[n - 1]
  );
}

console.log(dp[number]);

// 이제 답을 보지 않고 풀 수 있는가?
// dp문제: 큰 문제를 작은 문제로 나누고, 재사용한다.
// 피보나치: fib(3), fib(4) 구한걸 재사용한다.
// 포도주 최대 문제: 포도주가 n개일 때의 최대값은 n이 더 작을 때의 최대값과 연관이 있다. -> dp 사용 가능
// 이 경우는 세 가지로 나눌 수 있다.
// 1. n번 째 와인을 먹는 경우
  // 1-1. n-1 번째 와인을 먹는 경우: dp[n - 3] + wine[n - 1] + wine[n]
  // 1-2. n-1 번재 와인을 먹지 않는 경우 dp[n - 2] + wine[n]
// 2. n번 째 와인을 먹지 않는 경우
  // 2-1. 개수가 n-1일 때의 최댓값과 같다. = dp[n - 1]
// 이렇게 총 3가지 경우로 나눈 후, 이 값들 중의 최댓값을 고르면 된다.
// 이렇게 n = 4부터 dp값을 구하면서 재사용한다.
