/*data types and variable:

-datatypes:
    undefined, null, boolean(true/false), string, symbol, number and object(key-value pair)
-variable:
    label that point to a data/datatype.
    eg:(var myName = "beau")
    types of declaring a variable:
        1- var[variable] used in whole programe.eg:var ourTeam = 10;
        2- let[] eg:let theirTeam = 30;
        3- const[constant] this variable can never be changed eg:const allTeam = 40;
*/


var a; // declaring
var b = 2; // assigning (= is assigning opreator)
console.log(a)// will allow to see thing on the console
a = 8; // assiging
console.log(b)// will allow to see thing on the console

//JS is case sensitive
//camelCase.eg: (var nameOfStudent = "victor")[declaring and assigning] -- nameOfStudent = "william"[assigning]

c=10
d=20
var diff = c-d;
var sum = c+d;
var mul = c*d;
var div = c/d;

console.log(mul)

//increment a number by 1
var g = 69;
g = g + 1;
console.log(g)
//or
g++;
console.log(g)
//decrementing a number by 1
g--;
g--;
console.log(g)

//decimal number or floating point numbers or floats eg: 1.5, 0.009


//finding remainder of a number
var j = 20;
var k = 30;
var remainder = j/k;
console.log(remainder)
var remainder = j % k;//remainder(%)
console.log(remainder)


//compound assignment with augemted addition
j = j+10
console.log(j)
j+= 10 //simple method of adding numbers to a existing value using(+=)
console.log(j)


//compound assignment with augmented subraction
j-=30; //for subracting a number from itself
console.log(j)


//compound assignment with augumented multipication
j*=10; //for dividing a assigned var with a number
console.log(j);


//compound assignment with augumented divition
j/=2;
console.log(j);


var h = "this is a \"quoted\" text" //use (\") to create (")
console.log(h);
/* A string can also be assigned by using ('string')-by using this we don't need
to use [\"] for making a ["] and ("string") and (`string`)-this can also be used to define a string*/

/* Code Output:
     \' single quote
     \" double quote
     \\ backslash
     \n new line
     \r carriage return
     \b backspace
     \t tab
     \f form feed
*/
var o ="as you all know\"that\"\n\t\\\"this is a new line\"\\";
console.log(o)

//[+= can also be used for strings]

//variable name can also be added to a string like["hi i want to say" + o + "that's it bye!"]

//[.length] to a var will show the no. of characters in a string
var abc = 0;
var def = "buddy dsdas";
abc = def.length;//this will show the no. of charaters in a string
console.log(abc)


//var-name[index number]- to find the letter in that position.
var findLetter;
var letter = "good as dead";
findLetter = "o" + letter[3] +letter[8]
console.log(findLetter)


/*   strings are immutable. means the can'nt be altered like changing letters 
     using index number, instead we can change the whole string itself     */

//word blanks
function wordBlanks(one, two, three, four) {
    var rest="";
    rest += "hi " + one + " " +two
    return rest;
}

console.log(wordBlanks("dog","big","ran", "quickly"))
//

//array
var box = ["hello", "baby", 10];
console.log(box)
//nested array
var multiBox = [["boy","girl"],["animals","10","chicken"],["danger","dont",12]]
console.log(multiBox)
//access data with index
var spider = multiBox[2]
console.log(spider)
//access data in nested array with doble index
var spider = multiBox[1][2]
console.log(spider)

//modifying array
box [0] = "hi"
console.log(box)
box [2] = 22
console.log(box)
 
//maipulate arrays with push()
box.push("jk",90,["all","bay"])
console.log(box)
//remove last array or character from a array using pop()
box.pop()
console.log(box)
//manipulate with shift()-this will remove the first element
box.shift()
console.log(box)
//unshift()- this will add element to the front of the array(like push() adds element at back)
box.unshift("dongly")
console.log(box)


//passing values to function with arguments
function buddy(r,t){
    console.log(r- t + " is the answer")
}
buddy(10,9)


//globle scope
var myGlobal = 10; // if we define a varible as var outside a function it becomes globle

function fun1(){
    oopsGlobal = 5; // if we define a varible with out var inside a function it becomes globle
}                   // and if we define it with a var it only be defined inside a function

function fun2(){
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();


//Return in function
function testfun(char1, char2,char3){
    return char1 + char3 +100 + " is equal to 111";
}
console.log(testfun(1,200,10));

function testfun2(onu, ren, mun, nal){
    var motham;
    motham = onu + " one " + ren;
    return motham;
}
console.log(testfun2(1,2,3,4))

//assignment of value with Return value
var taken;
function given(num){
    return num * num;
};
taken = given(13)  //here the given(num) will become value of taken

//stand in line
/*
In Computer Science cue is an abstract data stucture where items are kept in order.
*/
function nextInLine(arr,item){  //here the goal is to add a new charcter to the array(last position)
                                // and to remove a charcter (first position)
    arr.push(item);
    return arr.shift();
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); 
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));


function remove(ar,ad){
    ar.push(ad);
    return "removed " + ar.shift() + " added " + ad;
}
var henry = [22,33,44,55,66,77];
console.log("before: " + JSON.stringify(henry));
console.log(remove(henry,88));
console.log("after: " + JSON.stringify(henry));


function load(carrier,insider){
    carrier.push(insider);
    return carrier.shift();
}

carrierLoad = [11,22,33,44,55,66]

console.log("Before: " + JSON.stringify(carrierLoad));
console.log(load(carrierLoad,77));
console.log("After :" + JSON.stringify(carrierLoad));
console.log(load(carrierLoad,88));
console.log("After-after: " + JSON.stringify(carrierLoad)); //json.stringify()--will make the
                                                            //integer a string.

//Use conditional Logic with if Statements
function checking(num){
    if (num){
        return "correct";
    }
    return "not-correct";
    
}
console.log(checking(false));
//equality operator[3 == 3] -- here 3=="3" also will come true(as it will convert to common type)
function check(num){
    if(num == 10){
        return "it's working (t)";
    }
    return "it's working (f)"
}
console.log(check(5));
//comparing with strict equality oprator[3 === 3] -- here 3 === "3" will come false.
function runner(num){
    if(num === "3"){
        return "right"
    }
    return "wrong"
}
console.log(runner(3))
//exercise to check equality operator (normal(==) vs strict(===))
function gate(a,b){
    if(a == b){
        return "true";
    }
    return "false";
}
console.log(gate(10,"10"))
function dress(a,b){
    if(a === b){
        return "fine";
    }
    return "not-fine";
}
console.log(dress(10,"10"))

function kia(den){
    if (den <= 100 & den >= 76){
        return den + " is less than 100"
    }else if (den > 50 & den < 75){
        return den + " is in b/w 50 and 75"
    }else {
        return den + " unknown"
    }
};
console.log(kia(45));

//inquality operator[!=]--I
//greater than operator[>]--II
//greater than or equal to operator[>=]--III
//lesser than operator[<]--IV
//lesser than or equal to operator[<=]--V

//--I
function good(num){
    if(num != 10){
        return "crt";
    }
    return "wrg";
}
console.log(good("10"))
    //strict operator
function bad(num){
    if(num !== 10){
        return "coo";
    }
    return "woo";
}
console.log(bad("10"))
//I--
//--II
function ab(num){
    if(num > 10){
        return "10 is lesser than " + num;
    }
    return "10 is greater than " + num;
}
console.log(ab(10));
//II--
//--III
function ab1(num){
    if(num >= 20){
        return "20 is lesser than or equal to " + num;
    }
    return "20 is greater than " + num;
}
console.log(ab1(20))
//III--
//--IV and --V
var rod= 15
if (rod < 15){
    console.log (rod + " is lesser than 15");
}else{
    console.log(rod + " is greater than 15");
}

function deen(num){
    if (num < 20){
        return num +" is lesser than 20"
    }
    if (num = 20){
        return num +" is equal to 20"
    }
    return num +" is greater than 20"
}
console.log(deen(20));
//IV-- and V--


//nested if technique using(&&)
function gear(number){
    if(number >= 90){
        if (number <=100){
            return number + " is between 100 and 90"
        }
    }
    return number+ " is not between 100 and 90"
}
console.log(gear(99));
    //now using [&&]
function gear1(number){
    if(number <=70 && number >=65){
        return "yes btw 70 & 65";
    }
    return "no not btw 70 & 65"
}
console.log(gear1(66))

//now going to use or [||] operator
function hen(num){
    if (num < 20 || num > 30){      //here [||] means or
        return num + " is outside"
    }
    return num + " is inside"
}
console.log(hen(22));
console.log(hen(19));

//else statements;
function ifel(num){
    if(num > 5){
        return num + " is crt"
    }else{
        return num + " is wrg"
    }
}

console.log(ifel(10))
//else if statements -- used to link multiple if statement;
//order of else if should be checked because if one "if" condition is achived it does'nt check the concecutive conditions.
function dot(nam){
    if(nam <= 11){
        return nam + " is RAJ" 
    }else if(nam >= 10){
        return nam + " is Dhar"
    }else{
        return nam + " is undefined"
    }
}
console.log(dot("10"))


//chained if/else if exercise
function exer(check){
    if (check < 5){
        return "Tiny";
    }else if(check < 10){
        return "Small";
    }else if(check < 15){
        return "Medium";
    }else if (check < 20){
        return "Large";
    }else if (check >= 20){
        return "Huge";
    }else{
        return "undefined";
    }
}
console.log(exer(26))


function hold(num){
    if (num < 5){
        return "XS"
    }else if (num > 5 & num < 10){
        return "S"
    }else if (num > 10 & num < 15){
        return "M"
    }else if (num > 15 & num < 20){
        return "L"
    }else{
        return "XXL"
    }
}
console.log(hold(19));

//golf code exercise 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]
function golf(par,strokes){
    if(strokes == 1){
        return names[0];
    }else if(strokes <= par - 2){
        return names[1]
    }else if(strokes == par - 1){
        return names[2]
    }else if (strokes == par){
        return names[3]
    }else if (storkes == par + 1){
        return names[4]
    }else if (strokes == par + 2){
        return names[5]
    }else if (strokes >= par + 3){
        return names[6]
    }else{
        return "undefined value"
    }
}
console.log(golf(5,5));


var golfing = ["Hole-in-one","Eagle","Birdie","Par","Bogey","Double Bogey","Go Home!"]
function play(goal,par){
    if(goal == 1){
        return golfing[0]
    }else if(goal <= par-2){
        return golfing[1]
    }else if(goal == par-1){
        return golfing[2]
    }else if(goal == par){
        return golfing[3]
    }else if(goal == par+1){
        return golfing[4]
    }else if(goal == par+2){
        return golfing[5]
    }else if(goal >= par+3){
        return golfing[6]
    }
};
console.log(play(6,5))



//Switch Statements-- can be used instead of chained else if;
function chain(val){
    var answer="";
    switch(val){
        case "a":
            answer = "alpha"
            break;
        case "b":
            answer = "beta"
            break;
        case "c" :
            answer = "gamma"
            break;
        case "d" :
            answer = "delta"
            break;
        default :  //"default" in "switch" is like "else" in "if/else" statement and case is like "if"
            answer = "kind of else in Switch statement"
            break;
    }
    return answer 
}
console.log(chain("b"));



var anrea = "";
function ned(val){
    switch(val){
        case "a":
        case 1:
        case "apple":
            anrea = "alpha";
            break;
        case "b":
        case 2:
        case "ball":
            anrea = "beta";
            break;
        case "c":
        case 3:
        case "call":
            anrea = "gamma";
            break;
        case "d":
        case 4:
        case "doll":
            anrea = "delta";
            break;
        case "e":
        case 5:
        case "end":
            anrea = "UV";
            break;
        default:
            anrea = "else";
            break;
    }
    return anrea;
}
console.log(ned("end"));




//switch statement for multiple value with same result
function chain1(val){
    var answer="";
    switch(val){
        case 1:
        case 2:
        case 3:
        case 4:
            answer = "numbers"
            break;
        case "a":
        case "b":
        case "c":
        case "d":
            answer = "letters"
            break;
        default :
            answer = "others"
            break;
    }
    return answer;
}
console.log(chain1(0))

//practice exercise
function chainToSwitch(val){
    var app="";
    switch(val){
        case "bob":
            app = "marley";
            break;
        case 42:
            app = "The Answer";
            break;
        case 1:
            app = "There is no#1";
            break;
        case 99:
            app = "Missed me by this much!";
            break;
        case 7:
            app = "Ate Nine";
            break;
        default:
            app = "default only";
            break;
    }

    return app;
}
console.log(chainToSwitch(69));

//returning a Booleaon Value with functions
function checking (a,b){
    return a > b;
}
console.log(checking(30,20));
//


//exiting early in a Function using Return
function daad (a,b){
    if(a<0 || b<0){
        return "und";
    }
    return a*a+b*b
}
console.log(daad(2,-4));

//Counting Cards
var count = 0;

function cc(card){

    switch(card){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            count++;
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            count--;
            break;
    }

var re = "Bet low";
    if(count > 0){
        re= "Bet high"
    }


    return count + " " + re; 
} 
cc(8);cc(10);cc(7);cc(1);cc(3);cc(6);
console.log(cc(9));
//


//OBJECTS
//object are similar to arrays, but they use properties to access data instead of indexes.
var firstobject = {
    "product":"Ball",
    "number":696969,
    "quality":"B",
    "manufacturing":["villianur","delhi","mumbai"],
    20:"jersey number is 10"
};
console.log(firstobject["manufacturing"]);

//acccessing an object property using dot(.) notation.
console.log(firstobject.number);
//accessing an object property using bracket notation([]).
console.log(firstobject["quality"]);
//accessing an object property using a variable.
var jersey = 20;
console.log(firstobject[jersey]);


//updating object properties
firstobject.product ="Mixer";
console.log(firstobject.product);
firstobject["number"] = "969696";
console.log(firstobject["number"]);

//adding properties and values to an object;
firstobject.delivery = "13th dec";
firstobject["storage"] = "Normal";
console.log(firstobject);

//delete property from an object;
delete firstobject.delivery;
delete firstobject["20"];
console.log(firstobject);

//objects for lookups
function value(val){
    var lookup = {
        "alpha" : "Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy"
    }
    var kate = lookup[val]
    return kate
}

console.log(value("delta"))

//testing object for properties using [hasOwnProperty(prop.name)] method.
var wind = {
    "low": "10 km/h",
    "medium": "50 km/h",
    "strong": "100 km/h",
    "very strong": "500 km/h"
}

function winCheck(val){
    if(wind.hasOwnProperty(val)){
        return wind[val] // see we can't use (.)notation here because the property may have space in between so JS will only allow property without space to be in (.) notation. 
    }else {
        return "not Found"
    }
}

console.log(winCheck("very strong"));


//manupulating complex objects
  //we'll make objects inside of an array
var arrayobj = [
    {
        "name":"george",
        "age":"28",
        "country":"poland",
        "height":"6 feet",
        "attempts":1
    },
    {
        "name":"hendry",
        "age":"39",
        "country":"germany",
        "height":"6.5 feet",
        "attempts":2
    }
]

//accessing nested objects
var nestobj = {
    "car":{
        "model-x":{
            "class":"premium",
            "price":"1cr",
            "area":["pondy","chennai","mumbai","germany","world"]
        },
        "model-y":{
            "class":"classic",
            "price":"75l",
            "area":["usa,polan,new zealand,australia,netherlands"]
        }

    }
}
var findobj = nestobj.car["model-x"].area[4]
console.log(findobj)

/* RECORD Collection -- Coding challange*/

//[var elementcopy = JSON.parse(JSON.stringify(element))] -- this is a way to make a copy of our code.
var collection = {
    "2025":{
        "album":"varanam aayiram",
        "artist":"harrish jayaraj",
        "tracks":[
            "oh shanthi",
            "ava enna",
            "adiye kolludhe"
        ]
    },

    "2009":{
        "album":"VTV",
        "artist":"ar rahman",
        "tracks":[
            "hossana",
            "manipayya"
        ]
    },

    "2003":{
        "artist":"vijay sagar",
        "tracks":[]
    },
    
    "2012":{
        "album":"unknown"
    }
}

var collectionCopy = JSON.parse(JSON.stringify(collection));


/*CHATGPT-SOLUTION:
function modifyCollection(year, key, value) {

  // Create the year if it doesn't exist
  if (!collection[year]) {
    collection[year] = {};
  }

  // Set or update the value
  collection[year][key] = value;

  // Cleanup empty values
  for (let prop in collection[year]) {
    let v = collection[year][prop];

    if (
      v === "" ||
      (Array.isArray(v) && v.length === 0) ||
      (typeof v === "object" && !Array.isArray(v) && Object.keys(v).length === 0)
    ) {
      delete collection[year][prop];
    }
  }
  return collection
}
console.log(modifyCollection(2002,"album","jersey's land"))
console.log(modifyCollection(2002,"artist","jersey's land"))
*/



