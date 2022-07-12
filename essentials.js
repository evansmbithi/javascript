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
    false
  );

/**
 * DOM  Manipulation
 * The back ticks tell the browser that anything inside here is a template literal 
 * meaning we can mix HTML <tags> and strings with JavaScript expressions to literally create templates. 
 */
const content = `
    <main>
        <article>
            <h1>${defPack.name}</h1>
            <ul>
            <li>Volume: ${defPack.volume}</li>
            <li>Color: ${defPack.color}</li>

            <li>Number of pockets: ${defPack.pocketNum}</li>
            <li>Left strap length: ${defPack.strapLength.left}</li>
            <li>Right strap length: ${defPack.strapLength.right}</li>
            <li>Lid status: ${defPack.lidOpen}</li>
            </ul>
        </article>
    </main>
`;

document.body.innerHTML = content;

