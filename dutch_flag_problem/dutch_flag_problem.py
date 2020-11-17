from typing import List


def dutch_flag_part(arr: List, idx: int):
    pivot = arr[idx]
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if arr[j] < pivot:
                arr[i], arr[j] = arr[j], arr[i]
                break
    print(arr)
    for i in reversed(range(len(arr))):
        for j in reversed(range(i)):
            if arr[j] > pivot:
                arr[i], arr[j] = arr[j], arr[i]
                print(arr)
                break
    return arr


def dutch_flag_part2(arr: List, idx: int):
    pivot = arr[idx]
    smaller = 0
    for i in range(len(arr)):
        if arr[i] < pivot:
            arr[i], arr[smaller] = arr[smaller], arr[i]
            smaller += 1
    print(arr)
    larger = 0
    for i in reversed(range(len(arr))):
        if arr[i] > pivot:
            arr[i], arr[larger] = arr[larger], arr[i]
            print(arr)
    return arr


if __name__ == '__main__':
    array = [3, 0, 1, 4, 2, 1]
    idx = 2
    dutch_flag_part(array, idx)