// M 이상 N 이하의 소수를 모두 출력하는 프로그램을 작성하시오.
const [M, N] = [3, 30];
const obj = {};
const checked = {};

for (let i = M; i <= N; i++) {
  obj[i] = true;
}

function findDecimal() {
  for (let num = 2; num <= Math.floor(N / 2); num++) {
    let index = 1;

    while (num * index <= N) {
      if (checked[num * index]) {
        index++;

        continue;
      }

      if (index !== 1 && num * index >= M) {
        obj[num * index] = false;
      }

      checked[num * index] = true;

      index++;
    }
  }
}

findDecimal();

for (const num in obj) {
  if (obj[num]) {
    console.log(num);
  }
}
