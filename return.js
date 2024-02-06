function add(number1, number2) {
    console.log(number1, number2)
    var sum = number1 + number2;
    // console.log(sum)
    return sum;
}

// add(10, 20);

var total = add(80, 20);
// console.log('total', total)


function bringSingra(money) {
    var singraPrice = 10;
    var quantity = money / singraPrice;
    return quantity;

}
var singras = bringSingra(200)
// console.log('singra quantity', singras)

function getAvarage(assignment1, assignment2, assignment3) {
    const sum = assignment1 + assignment2 + assignment3;
    const avarage = sum / 3;
    return avarage;
}
const assignment1Marks = 60;
const assignment2Marks = 59;
const assignment3Marks = 58;

var myAvarage = getAvarage(assignment1Marks, assignment2Marks, assignment3Marks)
console.log('my avarage so far:', myAvarage)