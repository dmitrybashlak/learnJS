var arr = {
	A: 1,
	B: 2,
	C: 3,
};

console.log(arr);

var result = {};
for (var key in arr){
	result[arr[key]] = key;
}

console.log(result);