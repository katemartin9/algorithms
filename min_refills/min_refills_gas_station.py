from typing import List


def min_refills(x: List, n, L):
    """
    :param x: petrol stations positions
    :param n: number of petrol stations
    :param L: full tank distance without refill
    :return:
    """
    num_refills = 0
    current_refill = 0
    while current_refill <= n:
        last_refill = current_refill
        while current_refill <= n and \
                x[current_refill + 1] - x[last_refill] <= L:
            current_refill += 1
        if current_refill == last_refill:
            return 'Impossible'
        if current_refill <= n:
            num_refills += 1
    return num_refills


if __name__ == '__main__':
    print(min_refills([0, 200, 375, 550, 750, 950], 4, 400))