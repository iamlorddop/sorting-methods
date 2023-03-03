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
function firstQuickSort(arr) {
	if (arr.length < 2) return arr
	let pivot = arr[0]
	const left = []
	const right = []
	  
	for (let i = 1; i < arr.length; i++) {
	  	if (pivot > arr[i]) {
		 	left.push(arr[i])
	  	} else {
		 	right.push(arr[i])
	  	}
	}
	return firstQuickSort(left).concat(pivot, firstQuickSort(right))
}

// Second concept
function secondQuickSort(arr) {
	if (arr.length < 2) return arr
	let min = 1
	let max = arr.length - 1
	let rand = Math.floor(min + Math.random() * (max + 1 - min))
	let pivot = arr[rand]
	const left = []
	const right = []
	arr.splice(arr.indexOf(pivot), 1)
	arr = [pivot].concat(arr)
	for (let i = 1; i < arr.length; i++) {
	  	if (pivot > arr[i]) {
		 	left.push(arr[i])
	  	} else {
		 	right.push(arr[i])
	  	}
	}
	return secondQuickSort(left).concat(pivot, secondQuickSort(right))
}


// Test
console.log(`After first sort 1 array: ${firstQuickSort(firstArray)}\nAfter first sort 2 array: ${firstQuickSort(secondArray)}\nAfter first sort 3 array: ${firstQuickSort(thirdArray)}\nAfter first sort 4 array: ${firstQuickSort(fourthArray)}`)

console.log(`After second sort 1 array: ${secondQuickSort(firstArray)}\nAfter second sort 2 array: ${secondQuickSort(secondArray)}\nAfter second sort 3 array: ${secondQuickSort(thirdArray)}\nAfter second sort 4 array: ${secondQuickSort(fourthArray)}`)
