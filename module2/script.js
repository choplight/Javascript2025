// Ask user for their name and store it in Fname
let Fname = prompt("What is your first name?");

alert("Welcome, " + Fname + "!");

// Create a constant to store the value of Pi to 7 significant digits
const myPi = 3.1415926;

// Ask user for their favorite number and store it in myFavNum
let myFavNum = prompt("What is your favorite number?");

// Calculate the area of a circle using user's favorite number as the radius
let myArea = myPi * myFavNum * myFavNum;

// Display message on the webpage with all the variables
document.write(
  "<p>Hello " + Fname + ", you entered <strong>" + myFavNum + "</strong> as your favorite number.</p>" +
  "<p>If that was the radius of a circle, the circle’s area would be approximately <strong>" + myArea.toFixed(6) + "</strong>.</p>" +
  "<p>We used the Pi value of <strong>" + myPi + "</strong> in our calculation.</p>"
);
