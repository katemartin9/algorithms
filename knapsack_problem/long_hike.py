from collections import namedtuple


def fract_knapsack(target, weights, values):
    Item = namedtuple("Item", "value weight")
    total_money = []
    weight_value_pairs = sorted(
        [Item(v, w) for v, w in zip(values, weights)],
        key=lambda i: i.value / i.weight,
        reverse=True
    )
    for item in weight_value_pairs:
        if target > 0:
            a = min(target, item.weight)
            val = item.value/item.weight*a
            total_money.append(val)
            target -= a
    return sum(total_money)


print(fract_knapsack(7, [4, 3, 2], [20, 18, 14]))


