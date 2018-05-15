var objects = [{
        A: 1,
        B: 2,
        name: 'Vasya'
    },
    {
        A: 3,
        name: 'Vasya',
        C: 1
    },
    {
        name: 'Dima',
        B: 3,
        C: 2
    }
];

console.log('Initial array:', objects);

for (var i = 0; i < objects.length; i++) {
    if (objects[i].name == 'Vasya') {
        console.log('Object with name Vasya:', objects[i]);
        break;
    }

}