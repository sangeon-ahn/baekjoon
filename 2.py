T = int(input())

class Solution:
  def spaceshipMoveCount(self, x, y):
    result = []
    distance = y - x
    count = 1

    def dfs(distance, speed, count):
      if distance <= 0 or speed <= 0 or (result and min(result) <= count):
        return

      if distance == 1 and speed == 1:
        result.append(count)
        return

      dfs(distance - speed, speed - 1, count + 1)
      dfs(distance - speed, speed, count + 1)
      dfs(distance - speed, speed + 1, count + 1)
    
    dfs(distance, 1, count)

    return min(result)


s = Solution()

for _ in range(T):
  x, y = map(int, input().split())
  print(s.spaceshipMoveCount(x, y))

