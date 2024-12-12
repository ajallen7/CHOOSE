let left = document.querySelector('.left')
let right = document.querySelector('.right')
let leftRight = document.querySelector('.leftRight')
let text = document.querySelector('p')
let walter = document.querySelector('.walter')
let meth = document.querySelector('.meth')
let jesse = document.querySelector('.jesse')
let gus = document.querySelector('.gus')
let cook = document.querySelector('.cook')
let happy = document.querySelector('.happy')
let schraderbrau = document.querySelector('.schraderbrau')
let x = document.querySelector('.x')
let van = document.querySelector('.van')
let chicken = document.querySelector('.chicken')
let flask = document.querySelector('.flask')
let help = document.querySelector('.help')
let lab = document.querySelector('.lab')
let xa = document.querySelector('.xa')
let evil = document.querySelector('.evil')
let ded = document.querySelector('.ded')


    meth.style.display = "none"
    walter.style.display ="none"
    gus.style.display ="none"
    jesse.style.display ="none"
    cook.style.display ="none"
    schraderbrau.style.display="none"
    happy.style.display="none"
    x.style.display="none"
    van.style.display="none"
    chicken.style.display="none"
    flask.style.display="none"
    help.style.display ="none"
    lab.style.display ="none"
    xa.style.display="none"
    evil.style.display="none"
    ded.style.display="none"
   
  // walter consquent
    
left.addEventListener("click", function() {
    text.innerHTML = "My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane Albuquerque New Mexico 87104. This is my confession. Click the Meth or Jesse.";
    leftRight.style.display="none";
    left.style.display ="none";
    right.style.display ="none";
    schraderbrau.style.display="none";
    happy.style.display="none";
    walter.style.display ="block";
    jesse.style.display ="flex";
   meth.style.display = "flex";
});

  //gus consequent
right.addEventListener("click", function() {
    text.innerHTML ="Hello, and welcome to the Los Pollos Hermanos Family. My name is Gustavo, but you can call me gus. Click the Chicken or The Lab."
    leftRight.style.display="none";
    left.style.display ="none";
    right.style.display ="none";
   walter.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   gus.style.display = "block";
jesse.style.display ="none";
chicken.style.display="flex"
    flask.style.display="flex"
});

// walter right choice 1
meth.addEventListener("click", function() {
    text.innerHTML = "This is a good batch, man.";
    leftRight.style.display="none";
    left.style.display ="none";
    right.style.display ="none";
    schraderbrau.style.display="none";
    happy.style.display="none";
   walter.style.display ="block";
   jesse.style.display ="flex";
});

    // 2nd to last
jesse.addEventListener("click", function() {
    text.innerHTML = "Teach me how to cook, Mr. White.         Click the Van to Sell, Click the X to not sell."
    left.style.display ="none";
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "block";
   x.style.display="flex"
    van.style.display="flex"
});

x.addEventListener("click", function() {
    text.innerHTML = "Jesse Pinkman quits his drug manufacturing job & gets a job at Amazon. Great Choice!"
    left.style.display ="none";
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="block"
});

van.addEventListener("click", function() {
    text.innerHTML = "Oops, Hank caught you. Bad Choice!"
    left.style.display ="none";
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="block";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="none"
});



chicken.addEventListener("click", function() {
    text.innerHTML = "Delicious!"
    left.style.display ="none";
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="none"
    chicken.style.display="flex"
    flask.style.display="flex"
    gus.style.display = "block";
});


flask.addEventListener("dblclick", function() {
    text.innerHTML = "Welcome to The Lab, Double Click Walter to kill him, or double click the X to not kill him. "
    left.style.display ="none";
    lab.style.display ="block"
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="none"
    gus.style.display="none"
    chicken.style.display="none"
    flask.style.display="none"
    help.style.display="flex"
    xa.style.display="flex"
});

help.addEventListener("click", function() {
    text.innerHTML = "Congrats, we finally got Heisenberg. Great Choice!"
    left.style.display ="none";
    lab.style.display ="none"
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="none"
    gus.style.display="none"
    chicken.style.display="none"
    flask.style.display="none"
    help.style.display="none"
    xa.style.display="none"
    evil.style.display="block"

});

xa.addEventListener("click", function() {
    text.innerHTML = "Oops, Walter got to you before you could get to him. Bad choice! "
    left.style.display ="none";
    lab.style.display ="none"
    right.style.display ="none";
   walter.style.display ="none";
   jesse.style.display ="none";
   meth.style.display ="none";
   schraderbrau.style.display="none";
   happy.style.display="none";
   cook.style.display = "none";
   x.style.display="none"
    van.style.display="none"
    happy.style.display="none"
    gus.style.display="none"
    chicken.style.display="none"
    flask.style.display="none"
    help.style.display="none"
    xa.style.display="none"
    ded.style.display="block"
});

