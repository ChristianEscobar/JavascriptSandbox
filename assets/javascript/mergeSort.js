

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

	leftHalf = mergesort(leftHalf);
	rightHalf = mergesort(rightHalf);

}

function merge(leftArray, rightArray) {
	var mergedArray = [];

	
}