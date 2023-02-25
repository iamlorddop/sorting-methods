# Selection sort

<div align="center">
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/selection-sort.gif" alt="bubble-sort.gif">
</div>

Selection sort is one of the simplest algorithms.

## How does Selection Sort Work?

Its essence is to select the minimum element for each pass through the array (for sorting in ascending order) and swap it with the first element in the not yet sorted section of the array, thereby reducing the length of this section by one, and so on until all are sorted elements.

One variation of selection sort is called “Bidirectional selection sort” that goes through the list of elements by alternating between the smallest and largest element, this way the algorithm can be faster in some cases.

Let's look at an iteration example:

<table>
    <tr>
        <th>Pass</th>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
    </tr>
    <tr>
        <th>Pass 1</th>
        <td><b>64</b></td>
        <td>25</td>
        <td>12</td>
        <td>22</td>
        <td>11</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td><b>11</b></td>
        <td>25</td>
        <td>12</td>
        <td>22</td>
        <td>64</td>
    </tr>
    <tr>
        <th>Pass 2</th>
        <td>11</td>
        <td><b>25</b></td>
        <td>12</td>
        <td>22</td>
        <td>64</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>11</td>
        <td><b>12</b></td>
        <td>25</td>
        <td>22</td>
        <td>64</td>
    </tr>
    <tr>
        <th>Pass 3</th>
        <td>11</td>
        <td>12</td>
        <td><b>25</b></td>
        <td>22</td>
        <td>64</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>11</td>
        <td>12</td>
        <td><b>22</b></td>
        <td>25</td>
        <td>64</td>
    </tr>
    <tr>
        <th>Pass 4</th>
        <td>11</td>
        <td>12</td>
        <td>22</td>
        <td><b>25</b></td>
        <td>64</td>
    </tr>
    <tr>
        <th>Pass 5</th>
        <td><b>11</b></td>
        <td><b>12</b></td>
        <td><b>22</b></td>
        <td><b>25</b></td>
        <td><b>64</b></td>
    </tr>
</table>

Follow the below steps to solve:
- Initialize minimum value (indexMin) to location 0.
- Traverse the array to find the minimum element in the array.
- While traversing if any element smaller than indexMin is found then swap both the values.
- Then, increment indexMin to point to the next element.
- Repeat until the array is sorted.

**Time Complexity**: The time complexity of Selection Sort is O(N2) as there are two nested loops.
One loop to select an element of Array one by one = O(N).
Another loop to compare that element with every other Array element = O(N)

O(N) * O(N) = O(N*N) = O(N2)

**Auxiliary Space**: O(1)

```
See the required code in the root of this directory
```

**Stability**: The default implementation is not stable. However, it can be made stable.

A sorting algorithm is said to be stable if two objects with equal or same keys appear in the same order in sorted output as they appear in the input array to be sorted.
Any comparison based sorting algorithm which is not stable by nature can be modified to be stable by changing the key comparison operation so that the comparison of two keys considers position as a factor for objects with equal key or by tweaking it in a way such that its meaning doesn’t change and it becomes stable as well.

Selection sort can be made Stable if instead of swapping, the minimum element is placed in its position without swapping i.e. by placing the number in its position by pushing every element one step forward(shift all elements to left by 1). 
In simple terms use a technique like insertion sort which means inserting element in its correct place. 

## Advantages of Selection Sort Algorithm

- Simple and easy to understand.
- Preserves the relative order of items with equal keys which means it is stable.
- Works well with small datasets.
- It is adaptable to various types of data types.
- Selection sort is an in-place sorting algorithm, which means it does not require any additional memory to sort the list.
- It is easy to modify to sort in ascending or descending order.
- It can be easily implemented in hardware, making it suitable for real-time applications.
- It has a best-case and average-case time complexity of O(N2), making it efficient for small data sets.
- It can also be used as a subroutine in more efficient sorting algorithms.
- It can be used in limited memory environments as it requires minimum extra memory.
- It is easy to understand, making it a popular choice for teaching purposes.
- It is suitable for sorting data with few unique keys, as it performs well in such scenarios.

## Disadvantages of Selection Sort Algorithm:

- Selection sort has a time complexity of O(N2) in the worst and average case.
- Does not works well on large datasets.
- Selection sort algorithm needs to iterate over the list multiple times, thus it can lead to an unbalanced branch.
- Selection sort has poor cache performance and hence it is not cache friendly. 
- Not adaptive, meaning it doesn’t take advantage of the fact that the list may already be sorted or partially sorted.
- It has a high number of write operations, leading to poor performance on systems with slow storage.
- It is not a parallelizable algorithm, meaning that it cannot be easily split up to be run on multiple processors or cores.
- It does not handle data with many duplicates well, as it makes many unnecessary swaps.
