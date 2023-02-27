# Quick sort

<div align="center">
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/quick-sort.gif">
</div>

Quick sort first selects a value called the <b>pivot</b>. Although there are many ways to select it, we'll just use the first value in the list. The role of the anchor element is to help split the list. The position where it ends up in the resulting sorted list, commonly referred to as the <b>split point</b>, will be used to split the list on subsequent calls to quicksort.

- **pivot** — the element of the array (in our case is the first element) which is compared with other elements in the same array.
- **left** — is an array that stores elements of the passed array which are less than the pivot.
- **right** — the same as left, but stores elements greater or equal to the pivot.

## How does Quick Sort Work?

Let's look at an example:

We have an array [5, 2, 6, 1, 30, -10].

Pivot is the first element. It is 5. The algorithm compares each element after the pivot. It compares 5 and 2. 2 is less and 5 (2 < 5) and hence 2 is added to the left array. Then it compares 5 and 6. 6 is greater than 5 (6 > 5) and the algorithm adds 6 to the right array. And it does the same with the other elements.

left: [2, 1, -10]

right: [6, 30]

Then the QuickSort algorithm does the operation of sorting with left [2, 1, -10] and right [6, 30] arrays. It means that our function will take 2 as the pivot of the left array and compare 1 and -10 with this pivot. And after it, we will get the following:

**For left [2, 1, -10]:**

- left: [1, -10]  (pivot is 1)
- right: []

next for left:

- left: [-10]

- right: []

**For right [6, 30]:**

- left: []
- right: [30]

<table>
    <tr>
        <th><span></span></th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
    </tr>
    <tr>
        <th>Array</th>
        <td><b>5</b></td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>30</td>
        <td>-10</td>
    </tr>
</table>
<table>
    <tr>
        <th>Left</th>
        <td>2</td>
        <td>1</td>
        <td>-10</td>
    </tr>
    <tr>
        <th>Right</th>
        <td>6</td>
        <td>3</td>
        <td><span></span></td>
    </tr>
</table>
<table>
    <tr>
        <th>Left</th>
        <td>1</td>
        <td>-10</td>
    </tr>
    <tr>
        <th>Right</th>
        <td><span></span></td>
        <td><span></span></td>
    </tr>
</table>

The sample: left + pivot + right (Plus is merge in this example).

<table>
    <tr>
        <th><span></span></th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
        <th>i[5]</th>
        <th><span></span></th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th><span></span></th>
    </tr>
    <tr>
        <th>Array</th>
        <td><b>5</b></td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>30</td>
        <td>-10</td>
        <th>return</th>
        <td>-10</td>
        <td>1</td>
        <td>2</td>
        <td>5</td>
        <td>right array</td>
    </tr>
</table>

<table>
    <tr>
        <th>Left</th>
        <td><b>2</b></td>
        <td>1</td>
        <td>-10</td>
        <th>return</th>
        <td>-10</td>
        <td>1</td>
        <td>2</td>
    </tr>
    <tr>
        <th>Left</th>
        <td><b>1</b></td>
        <td>-10</td>
        <td>& right</td>
        <th>return</th>
        <td>-10</td>
        <td>1</td>
        <td><span></span></td>
    </tr>
    <tr>
        <th>Left</th>
        <td><b>-10</b></td>
        <td><span></span></td>
        <td>& right</td>
        <th>return</th>
        <td>-10</td>
        <td><span></span></td>
        <td><span></span></td>
    </tr>
</table>

The same operation will be for the right array:

<table>
    <tr>
        <th><span></span></th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
        <th>i[5]</th>
        <th><span></span></th>
        <th><span></span></th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
    </tr>
    <tr>
        <th>Array</th>
        <td><b>5</b></td>
        <td>2</td>
        <td>6</td>
        <td>1</td>
        <td>30</td>
        <td>-10</td>
        <th>return</th>
        <td>left array</td>
        <td>5</td>
        <td>6</td>
        <td>30</td>
    </tr>
</table>

<table>
    <tr>
        <th>Right</th>
        <td><b>6</b></td>
        <td>30</td>
        <th>return</th>
        <td>6</td>
        <td>30</td>
    </tr>
    <tr>
        <th>Left</th>
        <td>& right</td>
        <td>30</td>
        <th>return</th>
        <td>-10</td>
        <td><span></span></td>
    </tr>
</table>

And finally:

<table>
    <tr>
        <td>return</td>
        <td>left array</td>
        <td>-10</td>
        <td>1</td>
        <td>2</td>
        <td>pivot</td>
        <td>5</td>
        <td>right array</td>
        <td>6</td>
        <td>30</td>
    </tr>
    <tr>
        <td>result</td>
        <td>-10</td>
        <td>1</td>
        <td>2</td>
        <td>5</td>
        <td>6</td>
        <td>30</td>
        <td><span></span></td>
        <td><span></span></td>
        <td><span></span></td>
    </tr>
</table>

**Average Time Complexity**: O(N*log(N))

**Worst Time Complexity**: O(N2)

**Best Auxiliary Space**: O(log N)

**Worst Auxiliary Space**: O(N)

```
See the required code in the root of this directory
```

**Stability**: The default implementation is not stable. However any sorting algorithm can be made stable by considering indexes as comparison parameter. 

## Advantages of Quick Sort:
- It is efficient on large data sets.
- It has a low overhead, as it only requires a small amount of memory to function.

## Disadvantages of Quick Sort:
- It has a worst-case time complexity of O(N2), which occurs when the pivot is chosen poorly.
- It is not a good choice for small data sets.
- It is not cache-efficient.
- It is not stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we swapping of elements according to pivot’s position (without considering their original positions).
