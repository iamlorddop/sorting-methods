let firstArray = [];
let secondArray = [1, 1, 19, 4, 5];
let thirdArray = [-1, 2, 4, -5, 10];
let fourthArray = [-1, -5, -12, -2, 0];

// Generate an array with random numbers
for(let i = 0; i < 5; i++) {
	firstArray.push(Math.round(Math.random() * 100));
}

console.log(`Before sort 1 array: ${firstArray}\nBefore sort 2 array: ${secondArray}\nBefore sort 3 array: ${thirdArray}\nBefore sort 4 array: ${fourthArray}`);

function insertionSort(arr) { 
   let key, j; 
   for (let i = 1; i < arr.length; i++) { 
      key = arr[i]; 
      j = i - 1; 
      /* Move elements of arr[0..i-1], that are 
      greater than key, to one position ahead 
      of their current position */
      while (j >= 0 && arr[j] > key) { 
         arr[j + 1] = arr[j]; 
         j = j - 1; 
      } 
      arr[j + 1] = key; 
   } 
	return arr;
} 

insertionSort(firstArray);
insertionSort(secondArray);
insertionSort(thirdArray);
insertionSort(fourthArray);

console.log(`After sort 1 array: ${firstArray}\nAfter sort 2 array: ${secondArray}\nAfter sort 3 array: ${thirdArray}\nAfter sort 4 array: ${fourthArray}`);