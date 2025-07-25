// 1. For loop to count and display even/odd
document.write("<h2>Even and Odd Checker</h2>");
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    document.write("Count " + i + " is even<br>");
  } else {
    document.write("Count " + i + " is odd<br>");
  }
}

document.write("<hr>"); // separator

// 2. Prompt user and use do-while loop
document.write("<h2>Count to users input</h2>");
let myNum = parseInt(prompt("Hello! Please enter a number between 5 and 20:"));//converts string number to integer variable
let counter = 1;
document.write("<strong> Counting to user input, " + myNum +":" + "</strong> <br> <br>");
do {
  document.write("Counter is: " + counter + "<br>");
  counter++;
} while (counter <= myNum);

document.write("<hr>");

// 3. Array with foreach()
document.write("<h2>Subject array using foreach()</h2>");
let subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

subjects.forEach(function(subject) {
  document.write(subject + "<br>");
});

document.write("<hr>");

// 4. Display array in one line, separated by commas
document.write("<h2>One-line array display</h2>");

document.write(subjects.join(", "));
