def sum_of_two_digits(digit_one, digit_two):
    return digit_one + digit_two


if __name__ == '__main__':
    a, b = map(int, input('Provide two numbers: ').split())
    print(sum_of_two_digits(a, b))