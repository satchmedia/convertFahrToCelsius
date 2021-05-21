// convert F to C
// ask the Fahrenheit value to the user 
const fahrenheit = prompt("Enter a fahrenheit value: ");

// calculate fahrenheit
const celsius = (fahrenheit - 32) * 5/9

// display the result

if(isNaN(fahrenheit)){
    console.log(fahrenheit + " is not a number");}
else
    console.log(`${fahrenheit} degree fahrenheit = ${celsius.toFixed(4)} degree celsius.`);