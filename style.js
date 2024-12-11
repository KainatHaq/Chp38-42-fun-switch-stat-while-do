//FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS


// Q#1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power() {
    let num1 = prompt("Enter the base number (a): "); 
    let num2 = prompt("Enter the exponent (b): "); 
    let result = Math.pow(num1, num2); 
    document.write("The result of " + num1 + " raised to the power of " + num2 + " is: " + result + "<br><br>");
}

power(); 


// Q#2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.

function isLeapYear() {
    let year = prompt("Enter a year: ");
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.write(year + " is a leap year.<br>"); 
    } else {
        document.write(year + " is not a leap year.<br>"); 
    }
}

isLeapYear(); 


// Q#3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateS(a, b, c) {
    return (a + b + c) / 2; 
}

function calculateArea() {
    let a = parseFloat(prompt("Enter length of side a: ")); 
    let b = parseFloat(prompt("Enter length of side b: ")); 
    let c = parseFloat(prompt("Enter length of side c: ")); 
    
    let S = calculateS(a, b, c); 
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c)); 
    
    document.write("The area of the triangle with sides " + a + ", " + b + ", and " + c + " is: " + area.toFixed(2) + "<br><br>");
}

calculateArea(); 

// Q#4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


function calculateAverage(marks1, marks2, marks3) {
    let totalMarks = marks1 + marks2 + marks3; 
    let average = totalMarks / 3;
    return average; 
}

function calculatePercentage(marks1, marks2, marks3) {
    let totalMarks = marks1 + marks2 + marks3; 
    let percentage = (totalMarks / 300) * 100; 
    return percentage;
}

function calculateAverage(marks1, marks2, marks3) {
    let totalMarks = marks1 + marks2 + marks3; 
    let average = totalMarks / 3;
    return average; 
}

function calculatePercentage(marks1, marks2, marks3) {
    let totalMarks = marks1 + marks2 + marks3; 
    let percentage = (totalMarks / 300) * 100; 
    return percentage; 
}

function mainFunction() {
    let marks1 = parseFloat(prompt("Enter marks for English: ")); 
    let marks2 = parseFloat(prompt("Enter marks for Math: ")); 
    let marks3 = parseFloat(prompt("Enter marks for Urdu: ")); 

    let average = calculateAverage(marks1, marks2, marks3); 
    let percentage = calculatePercentage(marks1, marks2, marks3); 

    document.write("Marks for English: " + marks1 + "<br>");
    document.write("Marks for Math: " + marks2 + "<br>");
    document.write("Marks for Urdu: " + marks3 + "<br><br>");
    
    document.write("The average marks are: " + average.toFixed(2) + "<br>");
    document.write("The percentage is: " + percentage.toFixed(2) + "%<br>");
}

mainFunction(); 


// Q#5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) { 
            return i; 
        }
    }
    return -1; 
}

let found = customIndexOf("Hello World", "o"); 
document.write("The index of 'o' in 'Hello World' is: " + found + "<br>");


// Q#6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function deleteVowels(sentence) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = ""; 
    
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    
    return result; 
}


let sentence = prompt("Enter a sentence (max 25 characters): "); 
if (sentence.length <= 25) {
    let resultSentence = deleteVowels(sentence);
    document.write("The sentence without vowels is: " + resultSentence + "<br><br>");
} else {
    document.write("The sentence is too long! Please enter a sentence with less than 25 characters.<br><br>");
}


// Q#7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence.

function countVowelPairs(sentence) {
    let count = 0; 
    let vowels = "aeiouAEIOU"; 
    
    for (let i = 0; i < sentence.length - 1; i++) {
    
        let pair = sentence[i] + sentence[i + 1];
        
        switch (true) {
            case (vowels.includes(pair[0]) && vowels.includes(pair[1])):
                count++; 
                break;
            default:
                break;
        }
    }

    return count; 
}

let word = prompt("Enter a sentence: ");
let result = countVowelPairs(word); 
document.write("The number of consecutive vowels in the sentence is: " + result + "<br><br>");


//Q# 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

function convertToMeters(km) {
    return km * 1000; 
}

function convertToFeet(km) {
    return km * 3280.84; 
}

function convertToInches(km) {
    return km * 39370.1; 
}

function convertToCentimeters(km) {
    return km * 100000; 
}

function convertDistance() {
    let km = parseFloat(prompt("Enter the distance between two cities in kilometers: "));
    
    let meters = convertToMeters(km);
    let feet = convertToFeet(km);
    let inches = convertToInches(km);
    let centimeters = convertToCentimeters(km);

    document.write("Distance in meters: " + meters + " m<br>");
    document.write("Distance in feet: " + feet + " ft<br>");
    document.write("Distance in inches: " + inches + " in<br>");
    document.write("Distance in centimeters: " + centimeters + " cm<br><br>");
}

convertDistance();


// Q#9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

function calculateOvertimePay(hoursWorked) {
    let overtimeRate = 12; 
    let regularHours = 40; 
    
    if (hoursWorked > regularHours) {
        let overtimeHours = hoursWorked - regularHours; 
        let overtimePay = overtimeHours * overtimeRate; 
        return overtimePay;
    } else {
        return 0; 
    }
}

function calculateTotalPay() {
    let hoursWorked = parseFloat(prompt("Enter the number of hours worked by the employee: ")); 
    
    let overtimePay = calculateOvertimePay(hoursWorked);

    if (overtimePay > 0) {
        document.write("The employee has worked " + hoursWorked + " hours.<br>");
        document.write("The overtime pay is Rs. " + overtimePay + "<br><br>");
    } else {
        document.write("The employee has worked " + hoursWorked + " hours, and is not eligible for overtime.<br><br>");
    }
}

calculateTotalPay(); 

// Q#10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateCurrencyNotes(amount) {
    let notes100 = Math.floor(amount / 100); 
    amount = amount % 100; 
    
    let notes50 = Math.floor(amount / 50); 
    amount = amount % 50; 
    
    let notes10 = Math.floor(amount / 10); 
    amount = amount % 10; 

    return {
        notes100: notes100,
        notes50: notes50,
        notes10: notes10
    };
}

function displayCurrencyNotes() {
    let amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds): ")); 
    
    let result = calculateCurrencyNotes(amount);

    document.write("For the amount of Rs. " + amount + " (in hundreds), the cashier will give:<br>");
    document.write("Number of 100 denomination notes: " + result.notes100 + "<br>");
    document.write("Number of 50 denomination notes: " + result.notes50 + "<br>");
    document.write("Number of 10 denomination notes: " + result.notes10 + "<br><br>");
}

displayCurrencyNotes(); 
