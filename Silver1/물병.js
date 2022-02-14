// 첫번째 시도 실패
function solution1(n, k) {
  let a = n.toString(2);
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === '1') {
      count++;
    }
  }

  if (count <= k) {
    console.log(0);
    return;
  }

  // console.log(a);
  let num = Math.pow(2, a.length + 1 - k);
  console.log(a, num);
  // console.log(Math.pow(2, a.length + 1 - k));
  a = a.slice(k - 1);
  console.log(a);

  let realNum = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === '1') {
      realNum += Math.pow(2, a.length - i - 1);
    }
  }
  console.log(realNum);
  console.log(num - realNum);
}

// 두번째 시도
// 어떤 방법으로 풀까
// 일단 1의 개수를 세는 건 똑같이 하고
// 그냥 더해서 for문으로 1 개수 세는 코드 짜보자
function solution2(n, k) {
  let count = 0;
  let binaryNumber = n.toString(2);

  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === '1') {
      count++;
    }
  }

  if (count <= k) {
    return 0;
  }

  let newNumber = n;

  while (true) {
    count = 0;
    newNumber += 1;

    let binaryNewNumber = newNumber.toString(2);

    for (let i = 0; i < binaryNewNumber.length; i++) {
      if (binaryNewNumber[i] === '1') {
        count++;
      }
    }

    if (count <= k) {
      return newNumber - n;
    }
  }
}

// console.log(solution2(1000000, 5));

// 다른사람 풀이
// 내 풀이랑 전반적인 구조는 같지만 내부 구현 코드가 다르다.
// 이사람은 1의 개수를 구할때는 이진수의 각 자릿수를 배열의 원소로 저장한 후 1인 원소를 reduce로 더해서 1의 개수를 구했다.
// 물 추가할 때도 그냥 나는 1리터씩 계속 더한 값의 이진수의 1 개수가 k 이하면 리턴하는 코드지만 이사람은 이진수의 마지막 1 이하부분을 다 더함으로써 최적화를 진행했다.
// 그리고 for문을 사용하지 않고 parseInt를 사용함으로써 2인수값을 10진수로 바꿔줬다.

// 배울 점
// 1. 배열 자료구조와 reduce로 1의 개수를 구한 점
// 2. 1의 개수를 구하는 함수를 만들어 사용한 점
// 3. while의 조건식에 2를 사용하여 별도의 변수 사용을 하지 않은 점
// 4. substring과 parseInt, lastIndexOf를 사용하여 불필요한 for문 진행을 하지 않은 점

let bottles = 13;
let binBottles = bottles.toString(2);

function countOnes(bin) {
  bin = bin.split('').map(Number);
  return bin.reduce((count, currentValue) => count += currentValue === 1, 0);
}

while (countOnes(binBottles) > 2) {
  console.log(countOnes(binBottles));
  bottles += parseInt(binBottles.substring(binBottles.lastIndexOf('1')), 2);
  binBottles = bottles.toString(2);
}

console.log(bottles - 13);
