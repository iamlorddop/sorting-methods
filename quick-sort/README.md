#Quick sort

<div align="center">
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/sorting_quicksort_anim.gif">
</div>

Quicksort first selects a value called the <b>pivot</b>. Although there are many ways to select it, we'll just use the first value in the list. The role of the anchor element is to help split the list. The position where it ends up in the resulting sorted list, commonly referred to as the <b>split point</b>, will be used to split the list on subsequent calls to quicksort.

The following shows how 54 acts as the first reference value. Next comes the <b>separation process</b>. It finds the split point and simultaneously moves the elements to the appropriate sides of the list, depending on whether they are greater than or less than the reference value.
<table>
    <tr>
        <td><span></span></td>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
        <th>i[5]</th>
        <th>i[6]</th>
        <th>i[7]</th>
        <th>i[8]</th>
    </tr>
       <tr>
        <td>54 will be the first pivot value</td>
        <td><b>54</b></td>
        <td>26</td>
        <td>93</td>
        <td>17</td>
        <td>77</td>
        <td>31</td>
        <td>44</td>
        <td>55</td>
        <td>20</td>
    </tr>   
</table>
The split starts by defining two position markers - let's call them <b>leftmark</b> and <b>rightmark</b> - at the beginning and end of the remaining list items. In the process of splitting, elements lying on the wrong sides of the reference must move until the markers converge at the split point.
<table>
    <tr>
        <td><span></span></td>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
        <th>i[5]</th>
        <th>i[6]</th>
        <th>i[7]</th>
        <th>i[8]</th>
    </tr>
    <tr>
        <td>Leftmark and rightmark will converge on split point</td>
        <td>54</td>
        <td><b>26</b></td>
        <td>93</td>
        <td>17</td>
        <td>77</td>
        <td>31</td>
        <td>44</td>
        <td>55</td>
        <td><b>20</b></td>
    </tr>
    <tr>
        <td>26<54 move to right 93>54 stop</td>
        <td>54</td>
        <td>26</td>
        <td><b>93</b></td>
        <td>17</td>
        <td>77</td>
        <td>31</td>
        <td>44</td>
        <td>55</td>
        <td><b>20</b></td>
    </tr>
    <tr>
        <td>Now rightmark 20<54 stop</td>
        <td>54</td>
        <td>26</td>
        <td><b>93</b></td>
        <td>17</td>
        <td>77</td>
        <td>31</td>
        <td>44</td>
        <td>55</td>
        <td><b>20</b></td>
    </tr>
    <tr>
        <td>Exchange 20 and 93</td>
        <td>54</td>
        <td>26</td>
        <td><b>20</b></td>
        <td>17</td>
        <td>77</td>
        <td>31</td>
        <td>44</td>
        <td>55</td>
        <td><b>93</b></td>
    </tr>
    <tr>
        <td>77>54 stop<br>
        44<54 stop<br>
        exchange 77 and 44</td>
        <td>54</td>
        <td>26</td>
        <td>20</td>
        <td>17</td>
        <td><b>77</b></td>
        <td>31</td>
        <td><b>44</b></td>
        <td>55</td>
        <td><b>93</b></td>
    </tr>
    <tr>
        <td>77&gt54 stop<br>
        31&lt54 stop<br>
        rightmark&ltleftmark<br>
        split point found<br>
        exchange 54 and 31
        </td>
        <td>54</td>
        <td>26</td>
        <td>20</td>
        <td>17</td>
        <td>44</td>
        <td><b>31</b></td>
        <td><b>77</b></td>
        <td>55</td>
        <td>93</td>
    </tr>
</table>

We start by incrementing <b>leftmark</b> until we find a value greater than the pivot. Then we decrease the <b>rightmark</b> by one until we find a value less than the reference. At this point, we have two elements that are out of place relative to the final split point. In our example, these are 93 and 20. Now you can swap them and repeat the process again.

When <b>rightmark</b> becomes less than <b>leftmark</b>, we stop. The position of <b>rightmark</b> at the moment is the split point. The reference value should be swapped with its contents, and then it will stand in its place. In addition, all elements to the left of the split point are now less than the pivot value, while all elements to the right are greater. The list is divided into two parts, and quicksort can be recursively applied to each of them.
<table>
    <tr>
        <td><span></span></td>
        <th>i[0]</th>
        <th>i[1]</th>
        <th>i[2]</th>
        <th>i[3]</th>
        <th>i[4]</th>
        <th>i[5]</th>
        <th>i[6]</th>
        <th>i[7]</th>
        <th>i[8]</th>
    </tr>
       <tr>
        <td>54 in place</td>
        <td>31</td>
        <td>26</td>
        <td>20</td>
        <td>17</td>
        <td>44</td>
        <td><b>55</b></td>
        <td>77</td>
        <td>55</td>
        <td>93</td>
    </tr>   
</table>