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

//Oefening 7:
function oefening7() {
    let height = parseInt(document.getElementById("height").value);
    let birthdate = parseInt(document.getElementById("birthdate").value);
    alert(calculate(height, birthdate))
}
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
*/

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