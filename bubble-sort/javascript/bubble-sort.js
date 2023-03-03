let firstArray = []
let secondArray = [1, 1, 19, 4, 5]
let thirdArray = [-1, 2, 4, -5, 10]
let fourthArray = [-1, -5, -12, -2, 0]

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100))
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}`)

// First concept
function bubbleSort (arr) {
	for(let i = arr.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j + 1]) {
				let temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
}

// Second concept
function bubbleSortSecondConcept (arr) {
	do {
		swapped = false
		console.log(arr)
		arr.forEach((item, index) => {
		  if (item > arr[index + 1]) {
			 // Save the value to a variable so we don't lose it
			 let temp = item
			 arr[index] = arr[index + 1]
			 arr[index + 1] = temp
			 swapped = true
		  }
		})
	} while (swapped)
}

// Test for first concept
bubbleSort(firstArray)
bubbleSort(secondArray)
bubbleSort(thirdArray)
bubbleSort(fourthArray)

// Test for first concept
bubbleSortSecondConcept(firstArray)
bubbleSortSecondConcept(secondArray)
bubbleSortSecondConcept(thirdArray)
bubbleSortSecondConcept(fourthArray)

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}`)
