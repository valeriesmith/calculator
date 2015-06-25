function assFart() {
	console.log("assfart");
}

// find the largest number in an array
function my_max(arr) {
	var maxNum = 0;
	for (i = 0; i <= arr.length; i ++) {
		if (arr[i] >= maxNum) {
			maxNum = arr[i];
		}
	}
	return maxNum;
}

// return the number of vowels in a string
function vowel_count(string) {
	var vowelArr = ["a","e","i","o","u"];
	var stringToArr = string.split("");
	var vowelCount = 0;
	for (i = 0; i <= stringToArr.length; i ++) {
		if (vowelArr.indexOf(stringToArr[i]) != -1) {
			vowelCount += 1;
		} 
	}
	return vowelCount;
}

// reverse a string

function reverse(string) {	
	return string.split("").reverse().join("");
}

console.log(reverse("mr b is stinky"))







