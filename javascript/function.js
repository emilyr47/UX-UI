console.log("linked function.js file is working");

// Start Scrolling & Sections
function scrollTo(about) {
    location.about = "#about" + about;
}

function scrollTo(visibility) {
    location.visibility = "#visibility" + visibility;
}

function scrollTo(realWorld) {
    location.realWorld = "#realWorld" + realWorld;
}

function scrollTo(freedom) {
    location.freedom = "#freedom" + freedom;
}

function scrollTo(consistency) {
    location.consistency = "#consistency" + consistency;
}

function scrollTo(errorPrev) {
    location.errorPrev = "#errorPrev" + errorPrev;
}

function scrollTo(flexibility) {
    location.flexibility = "#flexibility" + flexibility;
}

function scrollTo(aesthetic) {
    location.aesthetic = "#aesthetic" + aesthetic;
}

function scrollTo(rd) {
    location.rd = "#rd" + rd;
}

function scrollTo(doc) {
    location.doc = "#doc" + doc;
}

function scrollTo(conclusion) {
    location.conclusion = "#conclusion" + conclusion;
}
//End Scrolling & Sections


// Start Nav 
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction(nav)};

// Get the nav
var nav = document.getElementById("nav");

// Get the offset position of the nav
var sticky = nav.offsetTop;

// Add the sticky class to the nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction(nav) {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }
}
// End Nav

function showDiv() {
    document.getElementById('errMessage').style.display = "block";
 }




