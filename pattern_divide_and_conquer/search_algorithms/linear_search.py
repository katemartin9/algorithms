def linear_search(arr, low, high, key):
    """
    :param arr: array of values
    :param low: the lower bound
    :param high: the upper bound
    :param key: the key from which to search
    :return:
    """
    if high < low:
        return 'NOT_FOUND'
    if arr[low] == key:
        return low
    return linear_search(arr, low + 1, high, key)