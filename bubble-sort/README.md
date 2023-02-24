# Bubble sort

Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.

## How does Bubble Sort Work?

Let's look at an iteration example:

Pass 1: Bubble sort starts with very first two elements, comparing them to check which one is greater.

<table>
    <tr>
        <th>Pass</th>
        <th>0</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
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
