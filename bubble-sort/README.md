# Bubble sort

<div>
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/bubble-sort.gif" alt="bubble-sort.gif">
</div>

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high. Usually bubble sort is used in training, it is not effective in real projects.

## How does Bubble Sort Work?

Let's look at an iteration example:

Pass 1: Bubble sort starts with very first two elements, comparing them to check which one is greater.

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
        <td><b>5</b></td>
        <td><b>1</b></td>
        <td>4</td>
        <td>2</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td><b>5</b></td>
        <td><b>4</b></td>
        <td>2</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>4</td>
        <td><b>5</b></td>
        <td><b>2</b></td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>4</td>
        <td>2</td>
        <td><b>5</b></td>
        <td><b>8</b></td>
    </tr>
    <tr>
        <th>Pass 2</th>
        <td><b>1</b></td>
        <td><b>4</b></td>
        <td>2</td>
        <td>5</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td><b>4</b></td>
        <td><b>2</b></td>
        <td>5</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>2</td>
        <td><b>4</b></td>
        <td><b>5</b></td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>2</td>
        <td>4</td>
        <td><b>5</b></td>
        <td><b>8</b></td>
    </tr>
</table>

The array is already sorted, but algorithm does not know if it is completed. <br>The algorithm needs one whole pass without any swap to know it is sorted.

<table>
    <tr>
        <th>Pass 3</th>
        <td><b>1</b></td>
        <td><b>2</b></td>
        <td>4</td>
        <td>5</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td><b>2</b></td>
        <td><b>3</b></td>
        <td>5</td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>2</td>
        <td><b>3</b></td>
        <td><b>5</b></td>
        <td>8</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td><b>5</b></td>
        <td><b>8</b></td>
    </tr>
</table>

## Bubble sort: concept 1

- Iterate over the entire array and compare it to the original element.
- If it is greater than the next, then rearrange them.
- If not more, increment the pointer and compare the next two elements.
- When we reach the end, we know that the largest element of the array is in the last position.
- We repeat the process N times (where N is the length of the array) and each time we go to the last sorted element.

Time Complexity: O(N2)

Auxiliary Space: O(1) 

## Bubble sort: concept 2

- Iterate over the entire array and compare it to the original element.
- If it is greater than the next, then rearrange them.
- Note that the exchange has taken place.
- If the exchange has occurred, we go through the array from the beginning.
- We know that the array is sorted when there are no more exchanges.

Time Complexity: O(N2)

Auxiliary Space: O(1) 

```
See the required code in the root of this directory
```

## Worst Case Analysis for Bubble Sort

The worst-case condition for bubble sort occurs when elements of the array are arranged in decreasing order.
In the worst case, the total number of iterations or passes required to sort a given array is (n-1). where 'n' is a number of elements present in the array.

Worst and Average Case Time Complexity: O(N2). The worst case occurs when an array is reverse sorted.
Best Case Time Complexity: O(N). The best case occurs when an array is already sorted.
Auxiliary Space: O(1)
