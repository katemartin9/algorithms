def split_into_groups(children):
    children = sorted(children)
    arr = set()
    i = 0
    n = len(children)-1
    while i <= n:
        l, r = children[i], children[i] + 12
        arr.add((l, r))
        i += 1
        while i <= n and children[i] <= r:  # moving the pointer
            i += 1
    return arr


if __name__ == '__main__':
    child1 = 12 * 3 + 2
    child2 = 12 * 3 + 8
    child3 = 12 * 4 + 6
    child4 = 12 * 5

    children_age = [child1, child2, child3, child4]  # months
    split_into_groups(children_age)