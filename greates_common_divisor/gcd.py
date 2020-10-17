# Naive Algorithm
def gcd(a, b):
    # takes log(ab) steps
    assert a > 0
    assert b > 0
    best = 0
    for d in range(1, a + b):
        if a % d == 0 and b % d == 0:
            best = d
    return best


print(gcd(112, 60))


# Efficient algorithm
def euclid_gcd(a, b):
    if b == 0:
        return a
    else:
        a_prime = a % b
        print(a_prime)
    return euclid_gcd(b, a_prime)


print(euclid_gcd(357, 234))