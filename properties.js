var shoppingCart = {
    books: 5,
    pen: 25,
    keybord: 1,
    mouse: 1

}
// when you know the specific property to know the value 
var penCount = shoppingCart.pen;
// altenative way bellow

var penCount2 = shoppingCart['pen'];
// console.log(penCount2)

var propertyName = 'mouse';
var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertiesValue)

// to get the property name array way 
var properties = Object.keys(shoppingCart)
var propertiesValue = Object.values(shoppingCart)
// console.log(properties);
// console.log(propertiesValue)


var myComputer = {
    ram: '8gb',
    proccesor: 'i7',
    price: 50000,
    battery: 600000

}
var propertiName = 'ram';
console.log(myComputer)
myComputer['ram'] = '16gb';
console.log(myComputer)
myComputer[propertiName] = '32gb';
console.log(myComputer)