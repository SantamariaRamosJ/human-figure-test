/* Data types:
undefined, null, boolean, strings, number, symbol, object 

*/

/*the way we start manipulating data is using variables. We can set a variable using these threes methods:

var
let
const
*/

//compartison with over value operator
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "less than 10";
}

//Change this value to test

console.log(testGreaterOrEqual(10));

//Comparison with less value operator

function testLessThan(val) {
    if (val < 25) {
        return "under 25";
    }

    if (val < 55) {
        return "under 55";

    }

    return "55 or over";
}

//change this value to test

console.log (testLessThan(10));
//

//Less or equal
function testLessOrEqual(val){
    if (val <= 12) {
        return "Smaller than or equal to 12";
    }

    if (val <= 24 ){
        return "samller than or equal to 24";

    }

    return "more than 24";

}

console.log(testLessOrEqual(10));

//Comparisons with the lofical and operator
//sometimes with want to check if two things are true at the same time

function testLogicalAnd(val){
    if (val <= 50 && val >= 25){
        return "yes";

    }

    return "no";

    }

testLogicalAnd (10);

//Comparison with the logical Or operator

function testLogicalOr(val){

    if (val < 10 || val > 20){
        return "outside";
    }
return "inside";
}


console.log(testLogicalOr(15));

//Else statements

function testElse(val) {
    var result = "";

    if (val > 5){
        result = "bigger than 5";

    }else {
        result = "5 or smaller";
    }

    return result;
}

// Else if statements

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";

    }else if (val < 5) {
        return "Smaller than 5";
    } else {

    }

    return "Between 5 and 10";
} 

console.log(testElseIf(7));

// Else if exercise

var names = ["hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "go home"];
function golfScore(par, strokes){
    if (strokes == 1) {
        return names [0]
    }else if (strokes <= par - 2){
        return names [1]
    }else if (strokes == par - 1){
        return names [2]
    }else if (strokes == par){
        return names [3]
    }else if (strokes == par + 1){
        return names [4]
    }else if (strokes == par + 2){
        return names [5]
    }else if (strokes >= par + 3){
        return names [6]
    }
}   

console.log(golfScore(5, 4));

//Switch

function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer= "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "lambda";
            break;
        
    }
    return answer;
}

caseInSwitch(1);

//objects

var myDog = {
    "name": "happy coder",
    "legs": 5,
    "tails" : 5,
    "friends": ["freeCodeCamp Campers"]
};

myDog.legs = 9;

// add property to an object
var myDog = {
    "name": "happy coder",
    "legs": 5,
    "tails" : 5,
    "friends": ["freeCodeCamp Campers"]
};

myDog["color"] = "brown";

// to delete a property in a object you must do this syntax: delete myDog.tails;

//Loops
//While
var myArray = [];

var i=0;
while(i<5) {
    myArray.push(i);
    i++;
}
 console.log(myArray);


//for
var ourArray = [];

for (var i = 0; i < 5; i++){
    ourArray.push(i);

    var myArray = [];













