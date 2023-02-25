let firstArray = [];
let secondArray = [1, 1, 19, 4, 5];
let thirstArray = [-1, 2, 4, -5, 10];
let fourthArray = [-1, -5, -12, -2, 0];

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100));
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirstArray}\nBefore sort 4 array: ${fourthArray}`);

function selectionSort(arr) {
	for(let i = 0; i < arr.length - 1; i++) {
		let indexMin = i;

		for(let j = i + 1; j < arr.length; j++) {
			if(arr[indexMin] > arr[j]) {
				indexMin = j;
			}
		}
		if(indexMin !== i) {
			[arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
		}
	}
	return arr;
}

// Test
selectionSort(firstArray);
selectionSort(secondArray);
selectionSort(thirstArray);
selectionSort(fourthArray);

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirstArray}\nAfter sort 4 array: ${fourthArray}`);