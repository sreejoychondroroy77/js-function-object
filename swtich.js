const color = 'green';

if (color === 'green') {
    console.log('youre my green friend')
}
else if (color === 'blue') {
    console.log('youre my blue friend')
}
else if (color === 'red') {
    console.log('youre my red friend ')
}
else {
    console.log('we cant be a friend')
}

// alternative way switch 

switch (color) {
    case 'green':
        console.log('youre my green friend ');
        break;
    case 'blue':
        console.log('youre my blue friend');
        break;
    case 'white':
        console.log('youre my white friend')
        break;
    case 'red':
        console.log('youre my red friend')
        break;
    default:
        console.log('we cant be friend')
}
