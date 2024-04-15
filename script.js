console.log("Hello ninjas");

// variables & data types;

var greeting ="Hello world !";

var box = "perfume";
var box = "hair dryer";
var box = 10;
var isBox = true;
var age = 18;
//var isAllowedToTravel = (age==18);
console.log(isBox);

/// types
//Simple types
//String var box = "perfume";

// number var box = 10;

//boolean var isBox = true;


//complex types

//Arrays;
//index start from 0;
/*var array = [12,"perfume",false];
console.log(array);
array.push(25);
console.log(array);
array.pop();
console.log(array);*/

//Object type;
var person={
    name:"John",
    age:18,
    isMarried:false,
    address:{
        street:"1234 strt",
        zipCode:"123456"
    }
}
console.log(person.address);
/// Functions & events
function test() {        
    console.log("hello world !");
}

function calc(a,b){
    alert(a+b);
}

// operators (arithmetic + logical)

var x =5;
var y =8;
console.log("the result of x+y is ",x+y);
console.log("the result of x-y is ",x-y);
console.log("the result of x*y is ",x*y);
console.log("the result of x/y is ",x/y);
console.log("the result of x%y is ",x%y);

// == comparing two things out put is true/false;
// x && y => true if (x is true AND y is true)
// x || y => true if x OR y is true 
//console.log(x == y); //false
//console.log((x == y) && (x>y));// false
//console.log((x == y) || (x<y));

// conditionals:

if(x == y){
    console.log("false");
}

if(age>=18){
    console.log("you are allowed to party out side!!");
}else{
    console.log("you are allowed to party inside!!");
}

if(age>18){
    console.log("you are allowed to party out side!!");
}else if(age<18 || age>10){
    console.log("you are allowed to party inside!!");
}else{
    console.log("nothing is allowed!!");
}

var numbers = [1,2,3,4,5,6]
for(var i=numbers.length;i>=0;i--){
    console.log(numbers[i]);
}

function show(element){
    element.innerText = "hide";
    //console.log(element);
}
var h1_element = document.getElementById("elt");
function writeText(text){
    if(h1_element.innerText.length != 0){
        h1_element.innerText='';
    }else{
        h1_element.innerText=text;
        h1_element.style.color='red';
    }

}
var box = document.querySelector(".colored-box");
function boxColor(color){
    box.style=`background-color:${color}`;
}
var colored_input = document.getElementById("color");
function customizedColor(){
var val = colored_input.value;
boxColor(val);
}



