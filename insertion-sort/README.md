# Insertion sort

<div align="center">
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/insertion-sort.gif" alt="insertion-sort.gif">
</div>

Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration. Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place. A similar approach is used by insertion sort.

## How does Insertion Sort Work?

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
        <td><b>12</b></td>
        <td><b>11</b></td>
        <td>13</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td><b>11</b></td>
        <td><b>12</b></td>
        <td>13</td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <th>Pass 2</th>
        <td>11</td>
        <td><b>12</b></td>
        <td><b>13</b></td>
        <td>5</td>
        <td>6</td>
    </tr>
    <tr>
        <th>Pass 3</th>
        <td>11</td>
        <td>12</td>
        <td><b>13</b></td>
        <td><b>5</b></td>
        <td>6</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>11</td>
        <td>12</td>
        <td><b>5</b></td>
        <td><b>13</b></td>
        <td>6</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>11</td>
        <td><b>5</b></td>
        <td><b>12</b></td>
        <td>13</td>
        <td>6</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td><b>5</b></td>
        <td><b>11</b></td>
        <td>12</td>
        <td>13</td>
        <td>6</td>
    </tr>
    <tr>
        <th>Pass 4</th>
        <td>5</td>
        <td>11</td>
        <td>12</td>
        <td><b>13</b></td>
        <td><b>6</b></td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>5</td>
        <td>11</td>
        <td>12</td>
        <td><b>6</b></td>
        <td><b>13</b></td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>5</td>
        <td>11</td>
        <td><b>6</b></td>
        <td><b>12</b></td>
        <td>13</td>
    </tr>
    <tr>
        <td><span></span></td>
        <td>5</td>
        <td><b>6</b></td>
        <td><b>11</b></td>
        <td>12</td>
        <td>13</td>
    </tr>
</table>

**Time Complexity**: O(N2) 

**Auxiliary Space**: O(1)

```
See the required code in the root of this directory
```
**Stability**: The insertion sort is stable

**Usage**: Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.

## Binary Insertion sort

We can use binary search to reduce the number of comparisons in normal insertion sort. Binary Insertion Sort uses binary search to find the proper location to insert the selected item at each iteration. In normal insertion, sorting takes O(i) (at ith iteration) in worst case. We can reduce it to O(logi) by using binary search. The algorithm, as a whole, still has a running worst case running time of O(n^2) because of the series of swaps required for each insertion.

```
See the required code in the root of this directory
```

## Insertion Sort for Linked List

Algorithm for linked list:

- Create an empty sorted (or result) list.
- Traverse the given list, do following for every node.
- Insert current node in sorted way in sorted or result list.
- Change head of given linked list to head of sorted (or result) list. 

```
See the required code in the root of this directory
```
