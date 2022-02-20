// // 자연수 A를 B번 곱한 수를 알고 싶다. 단 구하려는 수가 매우 커질 수 있으므로 이를 C로 나눈 나머지를 구하는 프로그램을 작성하시오.

const input = '10 11 12';

const [A, B, C] = input.split(' ').map(Number);

// 풀이 실패
function pow(a, b, memo = {}) {
  if (b === 0) {
    return 1;
  }

  if (b in memo) {
    return memo[b];
  }

  if (b % 2 === 0) {
    const powedNumber = pow(a, b / 2, memo);
    memo[b / 2] = powedNumber;
    return memo[b / 2] * memo[b / 2];
  }

  if (b % 2 === 1) {
    const powedNumber = pow(a, (b - 1) / 2, memo);
    memo[b - 1 / 2] = powedNumber;
    return memo[(b - 1) / 2] * memo[(b - 1) / 2] * a;
  }
}

// console.log(pow(10, 11));

// // console.log(solution(A, B, C));
function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  // 중요한 것: 연산을 할 때마다 나머지를 구한다!

  if (exponent === 0) {
    return 1;
  }
  if (exponent % 2 === 0) {
    let byTwo = power(base, exponent / 2) % 94906249
    return (byTwo * byTwo) % 94906249
  }
  else {
    let byTwoPlusOne = power(base, (exponent - 1) / 2) % 94906249
    return (base * ((byTwoPlusOne * byTwoPlusOne) % 94906249)) % 94906249
  }

}
console.log(power(10, 11));