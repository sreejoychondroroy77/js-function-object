function odd_even(num) {
    var check = num % 2;
    var final = check == 0;
    return final;
}
var myfinal = odd_even(10);
console.log(myfinal)