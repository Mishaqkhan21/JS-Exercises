
function q1() {
  var name = prompt("Enter your name:");
  var age = prompt("Enter your age:");
  var city = prompt("Enter your city:");

  var message = "Hello " + name + "!\n" +
                "You are " + age + " years old.\n" +
                "You live in " + city + " ";

  alert(message);
}

function q2() {
  var num1 = Number(prompt("Enter first number:"));
  var num2 = Number(prompt("Enter second number:"));

  var sum = num1 + num2;

  alert("Sum: " + sum);
}

function q3() {
  var num1 = Number(prompt("Enter first number:"));
  var num2 = Number(prompt("Enter second number:"));

  var addition = num1 + num2;
  var subtraction = num1 - num2;
  var multiplication = num1 * num2;
  var division = num1 / num2;

  var result = "Addition: " + addition + "\n" +
               "Subtraction: " + subtraction + "\n" +
               "Multiplication: " + multiplication + "\n" +
               "Division: " + division;

  alert(result);
}

function q4() {
  var length = Number(prompt("Enter length of rectangle:"));
  var width = Number(prompt("Enter width of rectangle:"));

  var area = length * width;

  alert("Area of rectangle: " + area);
}

function q5() {
  var radius = Number(prompt("Enter radius of circle:"));

  var circumference = 2 * Math.PI * radius;

  alert("Circumference of circle: " + circumference);
}

function q6() {
  var studentName = prompt("Enter student name:");
  var englishMarks = Number(prompt("Enter English marks:"));
  var mathMarks = Number(prompt("Enter Math marks:"));
  var scienceMarks = Number(prompt("Enter Science marks:"));

  var totalMarks = 300; // assuming each subject out of 100
  var obtainedMarks = englishMarks + mathMarks + scienceMarks;

  var result = "Student Name: " + studentName + "\n" +
               "English Marks: " + englishMarks + "\n" +
               "Math Marks: " + mathMarks + "\n" +
               "Science Marks: " + scienceMarks + "\n" +
               "Total Marks: " + totalMarks + "\n" +
               "Obtained Marks: " + obtainedMarks;

  alert(result);
}

function q7() {
  var currentAge = Number(prompt("Enter your current age:"));

  var futureAge = currentAge + 10;

  alert("After 10 years, you will be " + futureAge + " years old.");
}

function q8() {
  var usd = Number(prompt("Enter amount in USD:"));

  var rate = 285;
  var pkr = usd * rate;

  alert(usd + " USD = " + pkr + " PKR");
}

function q9() {
  var name = prompt("Enter your name:");
  var language = prompt("Enter your favorite programming language:");

  var message = "Hello " + name + "!\n" +
                "Your favorite programming language is " + language + ".\n" +
                "Keep practicing!";

  alert(message);
}

function q10() {
  var productName = prompt("Enter product name:");
  var price = Number(prompt("Enter price:"));
  var quantity = Number(prompt("Enter quantity:"));

  var total = price * quantity;

  var receipt = "Product: " + productName + "\n" +
                "Price: " + price + "\n" +
                "Quantity: " + quantity + "\n" +
                "Total: " + total;

  alert(receipt);
}
