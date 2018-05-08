var objects = [
	{A: 1, B: 2, C: 3},
	{A:3, name: 2, C: 1},
	{A: 0, B: 3, C: 2}
];

console.log('Initial array:', objects);

for (var i = 0; i < objects.length; i++) {
        if (objects[i].name) {
            console.log('Object with name key', objects[i]);
        }
        
    }