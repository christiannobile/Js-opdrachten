//JavaScript - Opdrachten Serie 3
/*
//Opdracht 1
var img = document.getElementById("image1");
img.addEventListener("mouseover", function () {
    //we voegen een event toe op de image met een mouseover en we voeren een functie uit die de src van de img veranderd
    img.src = "images/image1_2.jpg"
})
*/

/*
//Opdracht 2
var alertFocusOut = document.getElementById("name");
//focusout is net zoals mouseover een attribuut voor een eventlistener
alertFocusOut.addEventListener("focusout", function() {
alert("Bedankt voor uw deelname");
})
*/

/*
//Opdracht 3
var alertKeyPress = document.getElementById("name");
alertKeyPress.addEventListener("keydown", function () {
    //de waarde binnen jet inputveld wordt opgevraagd door variabele.value
alert(alertKeyPress.value)
})
*/

/*
//Opdracht 4
//getElementsByTagName geeft een array terug, deze kan je gaan slicen

//parameters binnen de ronde haken worden enkel gebruikt wanneer je bepaalde parameters hebt die enkel bv binnen die functie bestaan
function resetFrms() {
    name.setAttribute("value","");
    firstname.setAttribute("value","");
    city.setAttribute("value","");
}

let name = document.getElementById("name");
let firstname = document.getElementById("firstName");
let city = document.getElementById("city");

/*
//indien je de input terug wilt zetten naar de begin-value, in dit geval werkt dit niet want reset moet zorgen dat de velden volledig leeg zijn.
var form = document.querySelector("form"); 
function formReset() {
    form.reset();
}
*/

//Opdracht 5
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");
var img4 = document.getElementById("image4");
var img5 = document.getElementById("image5");

img1.addEventListener("mouseover", function () {
    img1.src = "images/image1_2.jpg"
})

img2.addEventListener("mouseover", function () {
    img2.src = "images/image2_2.jpg"
})

img3.addEventListener("mouseover", function () {
    img3.src = "images/image3_2.jpg"
})

img4.addEventListener("mouseover", function () {
    img4.src = "images/image4_2.jpg"
})

img5.addEventListener("mouseover", function () {
    img5.src = "images/image5_2.jpg"
})

