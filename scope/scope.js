/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

var color = "purple";
headingColor();

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

/**
 * we'd expect the corresponding color variable to have 'blue' as a value but No.
 * let allows a variable to be available within the function scope. Only the title within the function will be blue.
 * However, using the color variable without let or const, the corresponding code picks the blue value defined in the function. 
 * Else, it picks skyblue.
 */

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
console.log('outside:', monColor) // reference error: monColor not defined

function headingColor() {
  // Let and const are locally-scoped variables 
  let color = "blue";
  // color = "blue"; //picks the global var color
  document.querySelector(".title").style.color = color;
  let monColor = 'yellow' // inaccasseible from outside
  console.log('inscope:', monColor)
}