
// random number generator, includes the min and max value. will use to choose pixel coordinates for scene characters
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// list of items to be put into scene
let listofChar = [
    "./Assets/Forest/Cartoon-Ant_10.png",
    "./Assets/Forest/Cartoon-Frog.png"
]

// get images and put them onto scene
function newImage(url){
    let image = document.createElement("img")
    let background = document.querySelector(".background_image")
    image.src = url
    image.style.height = "50px"
    image.style.width = "50px"
    background.append(image)
    return image
}

// placement of images on background
function place(elem){
    elem.style.position = 'absolute'
    
    function moveToCoordinates(left, bottom){
        elem.style.left = left + 'px'
        elem.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

// function for adding characters to background from array of character urls
function addSceneCharacters () {
    
    for (let i = 0; i < listofChar.length; i++) {
        let left = getRndInteger(1, 500)
        let bottom = getRndInteger(1, 500)
        place(newImage(listofChar[i])).to(left,bottom);
    }
    
}

addSceneCharacters()

/*********************************************
 * 
object for found images {

    array of images

    add images function with click event listener

    function checking if all items have been clicked that are supposed to be found


} 
 */

/*

global array of images to add to scene
function to add all images from array to scene with a random pixel location
have one array inside global array to be sky animals
have one array inside global array to be land animals
have one array inside global array to be plants

randomize location of sky animals to the sky
randomize location of land animals to the land

have function for finding images:
    randomize through the global array of land animals
    randomize through the global array of sky animals

    make these new array's clickable
    append these images to the item_checklist div
    
    when clicked, item_checklist div images have a marker somehow

    when all item_checklist images have been selected, congratulations alert


*/