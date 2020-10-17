

# Naive algorithm
def fibonacci_seq(n):
    if n <= 1:
        return n
    else:
        return fibonacci_seq(n-1) + fibonacci_seq(n-2)


print(fibonacci_seq(4))


# Efficient algorithm
def fibonacci_seq_eff(n):
    fib_nums = [0, 1]
    if n > 1:
        for i in range(2, n+1):
            fib_nums.append(fib_nums[i-1] + fib_nums[i-2])
    return fib_nums


print(fibonacci_seq_eff(50))

