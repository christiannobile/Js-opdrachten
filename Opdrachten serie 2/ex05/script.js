/* 
//oefening 1:
let message = "Christian";
window.alert(message);
*/

/*
//oefening 2:
let name = "Nobile";
let firstName = "Christian";
let city = "Genk";
// \n zorgt voor een enter
alert("Name     :"+name+"\n"+"Firstname     :"+firstName+"\n"+"City    :"+city);
*/

/*
//oefening 3:
let firstNAme = prompt("Enter your first name:");
alert("Hallo");
*/

/*
//oefening 4: op een knop een functie aanroepen
function oefening4() {
let name = document.getElementById("name").value;
let firstName = document.getElementById("firstName").value;
let city = document.getElementById("city").value;

alert("Name     :"+name+"\n"+"Firstname     :"+firstName+"\n"+"City    :"+city);
}
*/

/*
//Oefening 5: Roep html aan via het html document.getElementById("firstNumber").value) en toon de waarde ervan
function oefening5() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    //parseInt: zet de string om naar een integer, een parsefloat zet de string om naar een kommagetal
    let secondNumber = parseInt(document.getElementById("secondNumber").value);

    function multiply(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    //variabelen altijd meegeven, zo weet de functie op welke parameters de functie moet uitgevoerd worden
    alert(multiply(firstNumber, secondNumber));
}
*/

/*
//Oefening 6:
function oefening6() {
    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    //parseInt: zet de string om naar een integer, een parsefloat zet de string om naar een kommagetal
    let secondNumber = parseInt(document.getElementById("secondNumber").value);
    //Restdeling of modulo: %
    function multiply(firstNumber, secondNumber) {
        return firstNumber % secondNumber;
    }
    //variabelen altijd meegeven, zo weet de functie op welke parameters de functie moet uitgevoerd worden
    alert(multiply(firstNumber, secondNumber));
}
*/
/*
//Oefening 7:
function oefening7() {
    let height = parseInt(document.getElementById("height").value);
    let birthdate = parseInt(document.getElementById("birthdate").value);
    alert(calculate(height, birthdate))
}
*/
/*
function calculate(length, birthdate) {
    //gebruik = voor de berekening op te slaan
    length *= 2;
    length += 5;
    length *= 50;
    length -= birthdate;
    length += 1766;
    return length;
}

//Oefening 8:
    function calcAge() {
        let age =parseInt(document.getElementById("age").value);
        if ((age) >= 18) {
            alert ("U bent meerderjarig");
        }
        else if ((age) < 18) {
            alert ("U bent minderjarig");
        }
        else {
            alert ("Please enter a valid age");
        }
    }

*/
////////////////////////////////////////////////////////////////////////////////////////////////////


//Opdrachten serie 2
//Ex02:
/*
var result;

function surfaceCircle() {
    //gebruik een parseFloat voor kommagetallen, parseInt delete alles na de komma
    let radius = parseFloat(prompt("Enter radius:"));
    let surface = (radius * radius) * 3.14;
    result = surface;
    //gebruik toString om een integer om te vormen naar een string
    alert("De oppervlakte van de cirkel is: " + surface.toString());
}

function showSurface() {
    alert("De oppervlakte van de cirkel is: " + result.toString());
}
*/

/*
//Ex03

var a = 3;
var b = 2;

function multiply(x) {
    return x*3;
}
//de functie multiply wordt aangeroepen, met parameter x
function display() {
    alert ("Het resultaat van a is: "+multiply(a).toString()+"\nHet resultaat van b is: "+multiply(b).toString());
}
*/

/*
//Ex 04
function add(x) {
    return x + 2;
}

function display() {

    let numbers = [-2, 1, 4];

    for (let index = 0; index < numbers.length; index++) {
        //if altijd met ronde haakjes
        //als de rest van de index / 2 gelijk is aan 0 geef dan volgende alert
        if (index % 2 === 0) {
            alert(add(numbers[index])); }
    }
}
*/

//Ex05
// ++ is een increment: +1 -- is een decrement: -1
//Use the ++ or -- after or before the operand: 
    //let a = 1;
    //before: //    a=a+1   \\2  
              //    log(a)  \\2
    //after:  //    log(a)  \\1  
              //    a=a+1   \\2
let a = 0;
let b = 2;

a=b++;
alert ("a is "+a+" en b is "+b);

b = 2;
a=++b; 
alert ("a is "+a+" en b is "+b);

b = 2;
a=b--;
alert ("a is "+a+" en b is "+b);

b = 2;
a=--b;
alert ("a is "+a+" en b is "+b);

b = 2;
a+=b++;
alert ("a is "+a+" en b is "+b);

b = 2;
a = 1; 
a+=++b;
alert ("a is "+a+" en b is "+b);

b = 2;
a = 1; 
a-=b++;
alert ("a is "+a+" en b is "+b);

b = 2;
a = 1; 
a-=++b;
alert ("a is "+a+" en b is "+b);

b = 2;
a = 1; 
a+=b--;
alert ("a is "+a+" en b is "+b);
 
b = 2;
a = 1; 
a+=--b;
alert ("a is "+a+" en b is "+b);
