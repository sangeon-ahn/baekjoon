// dfs로 풀기.
// 내일 회사가서 코드 수정하기
// result에 지금은 push로 4개씩 묶은거 넣고있는데 이거말고 array 만든건 계속 내부에 배열 들어가고 있으니까 이거로 풀기
function solution(n) {
  const result = Array.from(Array(Math.pow(2, n)), () => Array(Math.pow(2, n)).fill(0));
  let number = 0;

  const array = [[[0], [0]], [[0], [0]]];

  function dfs(n) {
    if (n === 1) {

    }
  }

  dfs(n, array);

  return result;
}

