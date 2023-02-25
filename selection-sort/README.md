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
