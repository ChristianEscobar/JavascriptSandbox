

function mergesort(array) {
	if(array.length == 1) {
		return array;
	}

	var mid = array.length / 2;

	// slice does not include the given end argument
	var leftHalf = array.slice(0, mid);  
	var rightHalf = array.slice(mid, array.length);

	console.log("left: " + leftHalf);
	console.log("right: " + rightHalf);

	mergesort(leftHalf);
	mergesort(rightHalf);

  console.log('about to call merge');
  merge(leftHalf, rightHalf, array);

  return array;
}

function merge(leftArray, rightArray, array) {
  var index = 0;

  console.log('left ' + leftArray);
  console.log('right ' + rightArray);

  while(leftArray.length && rightArray.length) {
    //console.log('array is: ', array);

    // The shift() method removes the first element in the array
    // and returns that item
    if(rightArray[0] < leftArray[0]) {
      array[index++] = rightArray.shift();
    } else {
      array[index++] = leftArray.shift();
    }
  }

  console.log('after first while ' + array + ' index ' + index);

  // Place any left over values from the left or right arrays
  // into the merged array.  Only one of the while loops below should execute.
  while(leftArray.length) {
    console.log('left array is: ', leftArray);
    array[index++] = leftArray.shift();
  }

  while(rightArray.length) {
    console.log('right array is: ', rightArray);
    array[index++] = rightArray.shift();
  }
  
  console.log('array is: ' + array);
}