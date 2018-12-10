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

