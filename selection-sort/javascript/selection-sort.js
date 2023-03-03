let firstArray = []
let secondArray = [1, 1, 19, 4, 5]
let thirdArray = [-1, 2, 4, -5, 10]
let fourthArray = [-1, -5, -12, -2, 0]
let fifthArray = [4, 5, 3, 2, 4, 1]

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100))
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}\nBefore stable sort 5 array: ${fifthArray}`)

// Simple selection sort
function selectionSort(arr) {
	for(let i = 0; i < arr.length - 1; i++) {
		let indexMin = i

		for(let j = i + 1; j < arr.length; j++) {
			if(arr[indexMin] > arr[j]) {
				indexMin = j
			}
		}
		if(indexMin !== i) {
			[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
		}
	}
	return arr
}

// Stable selection sort
function stableSelectionSort(arr) {
   // Iterate through array elements
   for (let i = 0; i < arr.length - 1; i++) {
      // Loop invariant : Elements till
      // arr[i - 1] are already sorted.
   
      // Find minimum element from
      // arr[i] to arr[n - 1].
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
         if (arr[min] > arr[j]) {
            min = j
			}
		}
      // Move minimum element at current i.
      let key = arr[min]
      while (min > i) {
         arr[min] = arr[min - 1]
         min--
      }
      arr[i] = key
   }
}

// Test for simple selection sort
selectionSort(firstArray)
selectionSort(secondArray)
selectionSort(thirdArray)
selectionSort(fourthArray)

// Test for stable selection sort
stableSelectionSort(fifthArray)

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}\nAfter stable sort 5 array: ${fifthArray}`)