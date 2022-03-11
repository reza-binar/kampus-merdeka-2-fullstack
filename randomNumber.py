from functools import reduce
import random


def gen_avg(expected_avg=92, n=11, a=80, b=99):
    while True:
        l = [random.randint(a, b) for i in range(n)]
        avg = reduce(lambda x, y: x + y, l) / len(l)

        if avg == expected_avg:
            return l


for i in range(1):
    print(gen_avg())
