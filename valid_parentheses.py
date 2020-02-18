"""
20. Valid Parentheses
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

"""

class Solution:
    def isValid(self, s: str) -> bool:
        brackets = {')': '(', ']': '[', '}': '{'}
        closed = [')', '}', ']']
        seen = []
        for br in s:
            if not seen and br in closed:
                return False
            elif seen and br in closed:
                if seen[len(seen)-1] == brackets[br]:  # last_word = seen[len(seen)-1]
                    seen.pop()
                else:
                    return False
            else:
                seen.append(br)

        return len(seen) == 0


my_string0 = "{[]}"
my_string1 = '{}'
my_string2 = '[)'
my_string3 = '(([]){})'
sol = Solution()
print(sol.isValid(my_string0))

