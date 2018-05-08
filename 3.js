var objects = [
	{A: 1},
	{A: 1, B: 2, C: 3},
	{A: 1, B: 2},
	{A: 1, B: 2, C: 3, D: 4}
];

console.log('Initial array:', objects);

objects.sort((a,b) => {return Object.keys(b).length - Object.keys(a).length});

console.log('Sorted array', objects);