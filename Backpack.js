/**
 * Create a class
 * 
 * Class declaration: class Name { }
 * Class expression: const Name = class { }
 */

/**
 * Backpack = {
 *      name : 'Addidas',
 *      color : 'grey',
 *      zippers: 5,
 *      changeColor: function(newColor){
 *              this.color = newColor;
 *      }      
 * }
 * 
 */

// class constructor
// methods are outside the constructor
class Backpack {
    constructor(
        name,
        color,
        zippers
    ){
        // this.key = value
        // value - object/constructor parameters
        this.name = name;
        this.color = color;
        this.zippers = zippers;
    }
    // change color method declared after the constructor
    changeColor(newColor){
        this.color = newColor;
    }
}

// object constructor function
// has methods defined in the constructor function
function ObjBackpack(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.toggleLid = function (lidStatus) {
      this.lidOpen = lidStatus;
    };
    this.newStrapLength = function (lengthLeft, lengthRight) {
      this.strapLength.left = lengthLeft;
      this.strapLength.right = lengthRight;
    };
  }

// object from the object constructor function
  const objFunction = new ObjBackpack(
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false
  );
  

export default Backpack;
