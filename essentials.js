import books from './items.js';
import Backpack from './Backpack.js';
import Defaultpack from './Defaultpack.js';

/**
 * This is a verbose comment use /** to make one like this
 * it captures that this function has a parameter called update
 * which is of type string
 * 
 * function updateBackpack()
 * Outputs into the console 
 * @param {string} update 
 */
const updateBackpack = (update) => {
    console.info(update);
}

const backpack = {
    leadOpen: true,
    leadToggle: function (status){
        this.leadOpen = status;
        updateBackpack(`Lead status changed`);
    },
    items: [books, "pens"], // items in array with a 'books' object
    addBook: function(name, author, pages){
        this.items[0]['book3']={
            name: name,
            author: author,
            pages: pages
            /**
             * append a new book object inside the 'books' object
             * items[0] == books { }
             * books[key]=value
             * books['book3']= { key: value }
             */            
        }
    } // addBook method
}

// display the backpack object
console.log("The backpack object", backpack);

// add a new book in the backpack object
backpack.addBook("fifty shades", "IFDK", 1000) // title, author, pages

// display books in the backpack object
console.log("The books object", backpack.items[0]);

// a new Backpack object -> newPack
const newPack = new Backpack("Addidas", "grey", 3); // Backpack(name,color,zippers)

// manipulate the changeColor method
newPack.changeColor("white")

// display the newPack object
console.log("The newPack object:", newPack)

// Defaultpack object
const defPack = new Defaultpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
    "/assets/images/everyday.svg"
  );

/**
 * DOM  Manipulation
 * The back ticks tell the browser that anything inside here is a template literal 
 * meaning we can mix HTML <tags> and strings with JavaScript expressions to literally create templates. 
 */
// const content = `
//     <main>
//         <article>
//             <h1>${defPack.name}</h1>
//             <ul>
//             <li>Volume: ${defPack.volume}</li>
//             <li>Color: ${defPack.color}</li>

//             <li>Number of pockets: ${defPack.pocketNum}</li>
//             <li>Left strap length: ${defPack.strapLength.left}</li>
//             <li>Right strap length: ${defPack.strapLength.right}</li>
//             <li>Lid status: ${defPack.lidOpen}</li>
//             </ul>
//         </article>
//     </main>
// `;

// document.body.innerHTML = content;

const content = `
  
    <figure class="backpack__image">
      <img src=${defPack.image} alt="" />
    </figure>
    <h1 class="backpack__name">Everyday Backpack</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        defPack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        defPack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${defPack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        defPack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        defPack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        defPack.strapLength.right
      } inches</span></li>
      <li class="packprop backpack__lid">Lid status:<span> ${
        defPack.lidOpen
      }</span></li>
    </ul>
  
`;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article"); // create an <article> element
newArticle.classList.add("backpack"); // add a 'backpack' class to the new element
newArticle.setAttribute("id", "everyday"); // add id='everyday' attribute to the new element
newArticle.innerHTML = content;

main.append(newArticle); // parent.append() appends

/**
 * Challenge: Add a new element
 * - In JavaScript, create a new element to hold a navigation menu
 * - Add an unordered list and a series of no less than five links to the list 
 * - Use single words like “home”, “about”, etc for the list items and set the src attribute to # for simplicity
 * - Add the new navigation element to the DOM directly after the header
 * - Write basic CSS and add classes as necessary to create a horizontal layout for the menu. 
 * - A tip: Use either display flex or display grid to create the horizontal menu.
 */ 

const nav = `

    <li><a href="#">Home</a></li>
    <li><a href="#">About Us</a></li>
    <li><a href="#">Gallery</a></li>
    <li><a href="#">Contact</a></li>
    
`;

const navbar = document.createElement("nav")
const navlist = document.createElement("ul")
navlist.classList.add("nav-group")
navlist.innerHTML = nav;
navbar.append(navlist)

// place navbar before main element
main.insertAdjacentElement('beforebegin', navbar) 

// Display message on small screens
const message = `
    <h3>Sorry: this content is only available for wider screens!</h3>
`;

const header = document.querySelector("header")
const footer = document.querySelector("footer")

const smallScreen = document.createElement("div")
smallScreen.classList.add("small-screen")
smallScreen.innerHTML = message

// append element before the header
/**
 * it's a good idea to have the small screen message at the top
 * because javascript will be loaded and executed last and
 * placing the new element at the end will not display as required
 * because the HTML would have been rendered and displayed 
 */
header.insertAdjacentElement('beforebegin', smallScreen)

// append element after the footer
// footer.insertAdjacentElement('afterend', smallScreen)


// ARRAY METHODS
let backpackContents = ["piggy", "headlamp", "pen"];

console.log(backpackContents);

backpackContents.forEach(function (item) {
  item = `<li>${item}</li>`;
  console.log(item);
});

/**
 * find the first item that meets our parameters and the parameters are defined inside a custom function. 
 * The function grabs each item in turn, and then it says, if this item has a length that is bigger than or equal to five, 
 * meaning there are five or more characters in that item, then return the item. And this will return the first item that meets this requirement.
 */

let longItems = backpackContents.find(function (item) {
  if (item.length >= 5) {
    return item;
  }
});
console.log("longItems:", longItems);

/**
 * Solution: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

 const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "lightbulb",
  "USB drive",
];
console.log("Original array:", deskArray);

// Remove the last item:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// deskArray.pop(); 
// console.log(deskArray.pop());//the pop method takes the last item off and returns it to us.
// console.log("New array:", deskArray);

// Add last item as the first item on the array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// deskArray.unshift(deskArray.pop());
// console.log("Last item is now first:", deskArray);

// Sort items by alphabetical order:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// deskArray.sort();
// console.log("Sorted array:", deskArray); // Capitalized letters are sorted before lowercase letters. 

// Find "notebook":
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// const foundItem = deskArray.find((item) => item === "notebook"); //callback function that loops through all the items and returns only the item that matches the query
// console.log("Found item:", foundItem);

// Find and remove an item:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// let remove = "notebook";
// splice(index of current item, number of items)
// deskArray.splice(deskArray.indexOf(remove), 1); //pass in the index number for the current value and the number of items to remove.
// console.log(`Array with "${remove}" removed:`, deskArray);


