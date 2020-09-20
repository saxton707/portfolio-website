console.log("Hello World");

/*function mobileMenu() {
  var x = document.getElementById("toggleNav");
  if (yes.clicked === true) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} */

function menuToggle() {
  var x = document.getElementById('myNavToggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
