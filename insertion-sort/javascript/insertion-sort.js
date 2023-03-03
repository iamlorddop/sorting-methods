let firstArray = []
let secondArray = [1, 1, 19, 4, 5]
let thirdArray = [-1, 2, 4, -5, 10]
let fourthArray = [-1, -5, -12, -2, 0]
let fifthArray =[ 37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54]

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100))
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}\nBefore binary sort 5 array: ${fifthArray}`)

function insertionSort(arr) { 
   let key, j
   for (let i = 1; i < arr.length; i++) { 
      key = arr[i]
      j = i - 1
      /* Move elements of arr[0..i-1], that are 
      greater than key, to one position ahead 
      of their current position */
      while (j >= 0 && arr[j] > key) { 
         arr[j + 1] = arr[j] 
         j = j - 1
      } 
      arr[j + 1] = key 
   } 
	return arr
} 

// binary insertion sort
function binarySearch(a, item, low, high) {
   if (high <= low)
      return (item > a[low]) ? (low + 1) : low
  
   mid = Math.floor((low + high) / 2)
  
   if(item == a[mid])
      return mid + 1
  
   if(item > a[mid])
      return binarySearch(a, item, mid + 1, high)
          
   return binarySearch(a, item, low, mid - 1)
}
 
function binaryInsertionSort(arr) {
   for (let i = 1; i < arr.length; i++) {
      let j = i - 1
      let x = arr[i]
  
      // Find location to insert
      // using binary search
      let loc = Math.abs(binarySearch(arr, x, 0, j))
  
      // Shifting array to one
      // location right
             
      while (j >= loc) {
         arr[j + 1] = arr[j]
         j--
      }
  
      // Placing element at its
      // correct location
      arr[j+1] = x
   }
}

// Test
insertionSort(firstArray)
insertionSort(secondArray)
insertionSort(thirdArray)
insertionSort(fourthArray)

binaryInsertionSort(fifthArray)

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}\nAfter binary sort 5 array: ${fifthArray}`)