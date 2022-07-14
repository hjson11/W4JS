//Very Easy
var num1 = -10;
var num2 = 2;

if (num1 < num2){
  console.log(`${num1}`);
}
else {
  console.log(`${num2}`)
}

//Easy 
var fName = ["John", "Jane", "Josh"];
var lName = ["Doe", "Dyer", "Kim"];
var age = ["23", "12", "21"];

console.log(`Hello, my name is ${fName[1]} ${lName[1]} and I'm ${age[1]} years old.`)

//Medium
var months = ["Null", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var ans = prompt("Enter a number from 1-12: ");

if (ans < 1){
    console.log("Invalid");
}
else if (ans > 12){
    console.log("Invalid");
}
else{
    console.log(`${months[ans]}`);
}

//Hard
var tomHeight = "9 inches";
var tomMass = "8 grams";
var jerryHeight = "10 inches";
var jerryMass = "45 grams";
var tomBMI = tomMass / (tomHeight * tomHeight); 
var jerryBMI = jerryMass / (jerryHeight * jerryHeight);

var jerryGBMI = jerryBMI > tomBMI;

console.log(jerryBMI, tomBMI);

if(jerryBMI > tomBMI){
  console.log("Mark's BMI is bigger than John's");
}
else {
  console.log("John's BMI is bigger than Mark's");
}