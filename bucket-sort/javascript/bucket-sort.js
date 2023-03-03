let firstArray = []
let secondArray = [1, 1, 19, 4, 5]
let thirdArray = [-1, 2, 4, -5, 10]
let fourthArray = [-1, -5, -12, -2, 0]
let fifthArray = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100))
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}\nBefore sort 5 array: ${fifthArray}`)

function bucketSort(arr){
   if (arr.length === 0) {
		return arr
	}
  
	// Declaring vars
	var i,
	minValue = arr[0],
	maxValue = arr[0],
	bucketSize = bucketSize || 5
	 
	// Setting min and max values
	arr.forEach(function (currentVal) {
		if (currentVal < minValue) {
			minValue = currentVal
		} else if (currentVal > maxValue) {
			maxValue = currentVal
		}
	})
  
	// Initializing buckets
	let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
	let allBuckets = new Array(bucketCount)
	 
	for (i = 0; i < allBuckets.length; i++) {
		allBuckets[i] = []
	}
	 
	// Pushing values to buckets
	arr.forEach(function (currentVal) {
		allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal)
	})
  
	// Sorting buckets
	arr.length = 0
	 
	allBuckets.forEach(function(bucket) {
		insertionSort(bucket);
		bucket.forEach(function (element) {
			arr.push(element)
		})
	})
  
	return arr
}

// InsertionSort to be used within bucket sort
function insertionSort(arr) { 
   let key, j
   for (let i = 1; i < arr.length; i++) { 
      key = arr[i]
      j = i - 1

      while (j >= 0 && arr[j] > key) { 
         arr[j + 1] = arr[j] 
         j = j - 1
      } 
      arr[j + 1] = key
   } 
	return arr
} 

// Test
bucketSort(firstArray)
bucketSort(secondArray)
bucketSort(thirdArray)
bucketSort(fourthArray)
bucketSort(fifthArray)
 
console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}\nAfter sort 5 array: ${fifthArray}`)
 