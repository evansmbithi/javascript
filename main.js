const DOG_URL = 'https://dog.ceo/api/breeds/image/random'

const doggos = document.getElementById('dog-target')

async function addNewDoggo () {
    const promise = await fetch(DOG_URL)
    const processedResponse = await promise.json()
    const img = document.createElement("img")
    img.src = processedResponse.message;
    img.alt = "Cute doggo"
    doggos.appendChild(img)
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo)

/**
 * async functions always return a promise * 
 */

async function getName(){
    return "Evans" // comes back as a promise{}
}

console.log('a promise', getName());

getName().then(function (name){
    console.log("the actual name:", name);
})