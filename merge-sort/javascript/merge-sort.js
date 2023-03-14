let firstArray = []
let secondArray = [1, 1, 19, 4, 5]
let thirdArray = [-1, 2, 4, -5, 10]
let fourthArray = [-1, -5, -12, -2, 0]

for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100))
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}`)

function mergeSort(arr) {
	// code
}

mergeSort(firstArray)
mergeSort(secondArray)
mergeSort(thirdArray)
mergeSort(fourthArray)

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}`)