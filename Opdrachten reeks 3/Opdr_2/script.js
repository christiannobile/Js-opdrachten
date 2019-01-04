//JavaScript - Opdrachten Serie 3
/*
//Opdracht 1
var img = document.getElementById("image1");
img.addEventListener("mouseover", function () {
    //we voegen een event toe op de image met een mouseover en we voeren een functie uit die de src van de img veranderd
    img.src = "images/image1_2.jpg"
})
*/


//Opdracht 2
var alertFocusOut = document.getElementById("name");
//focusout is net zoals mouseover een attribuut voor een eventlistener
alertFocusOut.addEventListener("focusout", function() {
alert("Bedankt voor uw deelname");
})