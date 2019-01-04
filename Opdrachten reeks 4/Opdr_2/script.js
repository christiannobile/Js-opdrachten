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

/*
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
*/

/*
//Opdracht 6
//functie met naam replace met betrekking tot de parameter event die enkel binnen deze functie bestaat
function replace(event) {
    //event heeft betrekking op het element waar je muis op waar je muis op staat op dit moment(mouse-event). Neem van dat element het attribuut src
    let source = event.target.getAttribute("src");

    if (source.includes("_2")) {
        source = source.replace("_2", "");
        //update de src in html met de source waarop een functie is uitgevoerd
        event.target.setAttribute("src", source);
    } else {
        // slice van images/image1.jpg (het eerste karakter) t/m het einde van deze array van karakters -4 dus: images/image1
        source = source.slice(0, -4) + "_2" + source.slice(-4);
        //update de src in html met de source waarop een functie is uitgevoerd
        event.target.setAttribute("src", source);
    }
}
//haal een lijst op met alle kinderen van de class: container
let images = document.querySelector(".container").children;

//Voer de functie replace uit voor elk element van images zowel bij mouseenter als mouseout
for (element of images) {
    element.addEventListener("mouseenter", replace);
    element.addEventListener("mouseout", replace);
}
*/

/*
//JavaScript - Opdrachten Serie 4
//Opdracht 1
function addBorder() {
    image1.style.border = "3px solid red"
}

function removeBorder() {
    image1.style.border = ""
}
image1.addEventListener("mouseenter", addBorder);
image1.addEventListener("mouseout", removeBorder);
*/

//Opdracht 2
function hideText() {
    text.style.display = "none"
}

function showText() {
    text.style.display = "block"
}

let text = document.getElementById("text");
let show = document.getElementById("show");
let hide = document.getElementById("hide");

show.addEventListener("click", showText);
hide.addEventListener("click", hideText);