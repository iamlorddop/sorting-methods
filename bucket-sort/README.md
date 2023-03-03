# Bucket sort

<div align="center">
  <img src="https://github.com/iamlorddop/sorting-methods/blob/main/assets/img/bucket-sort.gif" alt="bucket-sort.gif">
</div>

Bucket sort is mainly useful when input is uniformly distributed over a range. For example, consider the following problem. 
Sort a large set of floating point numbers which are in range from 0.0 to 1.0 and are uniformly distributed across the range.

## How does Bucket Sort Work?

bucketSort(arr[], n)
- Create n empty buckets (or lists).
- Do following for every array element arr[i]. Insert arr[i] into bucket[n * array[i]]
- Sort individual buckets using insertion sort.
- Concatenate all sorted buckets.
