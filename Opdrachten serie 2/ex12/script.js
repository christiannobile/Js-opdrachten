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
/*
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
*/
/*
//Ex06
//array:
var tab = [-2, 1, 4];

function subtract(x) {
    //neem de eerste waarde uit de array tab
    return x - tab[0];
}

function display() {
    alert (subtract(tab[0]));
    alert (subtract(tab[2]));
}
*/
/*
//Ex07
//switch binnen een functie makeChoice
function makeChoice() {
    let x = prompt("Insert a number: 1, 2 or 3 ");

    switch (x) {
        case 1:
            alert("Thank you")
            break;
        case 2:
            alert("Hello")
            break;
        default:
            alert("Good bye");
    }
}
*/
/*

//Ex08
function weekday() {
    var day; 
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }
    alert("Today is "+day);
}
*/
/*
//Ex09
function testWhile() {
    let message = "insert again, your string didn't contain a p:";
    let string = "";

    while (!string.includes('p')) {
        string = prompt("Insert a string that includes the letter p");
    }
    alert(string);
}
*/
/*
//Ex10
function sum() {
    var som = 0;
    //maak een for lus met 3 stappen
    for (var i = 0; i < 3; i++) {
        //de som is gelijk aan zichzelf + de integer die je insert in de prompt
        som += parseInt(prompt("Insert number:"));
    }
    alert("And the sum is "+som.toString());
}
*/
/*
//Ex11
function calcAverage() {
    //een lege array
    var numbers = [];
    //wanneer de array leeg is (true) geef dan het volgende:
    while (true) {
        var roundNumber = prompt("Please enter a round number:");
        //parseFloat geeft roundNumber terug als een integer(kommagetal)
        var roundNumber = parseFloat(roundNumber);
        var average
        //als de restdeling van een integer 0 is en als de integer roter of gelijk dan nul is:
        if (roundNumber % 1 == 0 && roundNumber >= 0) {
            //push dan de integer(roundNumber) naar de array numbers
            numbers.push(roundNumber);
            console.log(numbers);
            var sumNumbers = 0;
            // tel sumNumbers met positie nul id array met zichzelf op en tel elk volgende waarde in de array daarbij op:
            for (let index = 0; index < numbers.length; index++) {
                sumNumbers += numbers[index];
                console.log(sumNumbers);
            }
            //gemiddelde: deel sumNumbers door het aantal cijfers id array:
            average = sumNumbers / numbers.length;
            console.log(average);
            alert("You have inserted the following numbers: "+numbers+" The average is: "+average);
        } else {
            alert("Something went wrong. Try to insert a round number")
            //confirm window met yes/no, indien false = break
        } if (confirm("add another number?") == false){
            break;
        }
    }
    alert("You have inserted the following numbers: "+numbers+" The average is: "+average);
}
*/

//Ex12
function temperatureConversion(){
    cont = true;
    while(cont == true){
      var how = prompt("What type of conversion would you like to do?\n0. end the program\n1. for Celcius to Fahrenheit.\n2. Celcius to Kelvin.\n3. Fahrenheit to Celcius.\n4. Fahrenheit to Kelvin.\n5. Kelvin to Celcius.\n6. Kelvin to Fahrenheit.");
      if (how == 0){
        break;
      } else if (how == 1){
        var c = prompt("which temperature in degrees Celcius would you like to convert to Fahrenheit?");
        c = parseInt(c);
        var f = (c * 9/5) + 32;
        cont = confirm ("you have converted " + c + "°C to " + f + "°f.\nWould you like to do another conversion?");
      } else if (how == 2){
        var c = prompt("which temperature in degrees Celcius would you like to convert to Kelvin?");
        c = parseInt(c);
        var k = c + 273.15;
        cont = confirm ("you have converted " + c + "°C to " + k + "°K.\nWould you like to do another conversion?");
      } else if (how == 3){
        var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Celcius?");
        f = parseInt(f);
        var c = ([f] - 32) / (9/5);
        cont = confirm ("you have converted " + f + "°f to " + c + "°C.\nWould you like to do another conversion?");
      } else if (how == 4){
        var f = prompt("which temperature in degrees Fahrenheit would you like to convert to Kelvin?");
        f = parseInt(f);
        var k = ((f - 32) * (5/9)) + 273.15;
        cont = confirm ("you have converted " + f + "°f to " + k + "°K.\nWould you like to do another conversion?");
      } else if (how == 5){
        var k = prompt("which temperature in degrees Kelvin would you like to convert to Celcius?");
        k = parseInt(k);
        var c = [k] - 273.15;
        cont = confirm ("you have converted " + k + "°K to " + c + "°C.\nWould you like to do another conversion?");
      } else if (how == 6){
        var k = prompt("which temperature in degrees Kelvin would you like to convert to Fahrenheit?");
        k = parseInt(k);
        var f = ([k] * 9/5) - 459.67;
        cont = confirm ("you have converted " + k + "°K to " + f + "°f.\nWould you like to do another conversion?");
      } else {
        alert("from 0 to 6 dude it's not supposed to be that hard.");
      }
    }
  }