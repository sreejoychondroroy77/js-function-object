var shoppingCart = {
    books: 5,
    pen: 25,
    keybord: 1,
    mouse: 1,
    shoes: 2

}

const keys = Object.keys(shoppingCart);
console.log(keys)

const values = Object.values(shoppingCart);
console.log(values)

for (var i = 0; i < keys.length; i++) {
    var propertiName = keys[i];
    var propertiesValue = shoppingCart[propertiName];
    // console.log(propertiName, propertiesValue)
}

for (var propertyName in shoppingCart) {
    var propertiesValue = shoppingCart[propertyName];
    console.log(propertyName, propertiesValue)
}