class solution:
  def calculateBridgesNumber(self, n, m):
    def factorial(n):
      if n <= 1:
        return 1
      else:
        return n * factorial(n - 1);
    
    return int(factorial(m) / (factorial(m - n) * factorial(n)))

answer = solution() 

T = input()

for _ in range(int(T)):
  n, m = map(int, input().split())
  print(n, m)
  Answer = answer.calculateBridgesNumber(n, m)

  print(Answer)



