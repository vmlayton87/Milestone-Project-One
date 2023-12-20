
// random number generator, includes the min and max value. will use to choose pixel coordinates for scene characters, will use for index value for choosing images to be found
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// list of items to be put into scene
const listofChar = [
    "./Assets/Forest/bee.png",
    "./Assets/Forest/blue_bird.png",
    "./Assets/Forest/brown_mouse.png",
    "./Assets/Forest/Cartoon_Butterfly.png",
    "./Assets/Forest/cartoon_duck.png",
    "./Assets/Forest/Cartoon-Ant.png",
    "./Assets/Forest/Cartoon-Frog.png",
    "./Assets/Forest/Cartoon-owl-asleep.png",
    "./Assets/Forest/Cartoon-Snail.png",
    "./Assets/Forest/fat_yellow_bird.png",
    "./Assets/Forest/fox.png",
    "./Assets/Forest/grey_blue_butterfly.png",
    "./Assets/Forest/grey_mouse.png",
    "./Assets/Forest/monkey.png",
    "./Assets/Forest/red_bird.png",
    "./Assets/Forest/reindeer.png",
    "./Assets/Forest/snail.png",
    "./Assets/Forest/Snake-BACK.png"
]

// get images and put them onto scene
function newImage(url){
    let image = document.createElement("img")
    let background = document.querySelector(".background_image")
    image.src = url
    image.style.height = "50px"
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

findItems = {
    
    findCharacterList: [],

    doNotFindCharList: [],

// when found item is clicked on, it is removed from the scene and a checkmark is added next to the list

    checkOffIfCorrectImageFound: function (){
        let imageElement = document.querySelectorAll("img")
        let imageFilePathArray = []
        console.log("image element array: " , imageElement)
        for (let i = 0; i < imageElement.length; i++) {
            imageFilePathArray.push(imageElement[i].attributes.src.nodeValue ) // where the file path is located and an array made out of those
        }
        console.log("List out all image tag sources: " , imageFilePathArray)
        
        if (imageFilePathArray[0]== this.findCharacterList[0]) {
            console.log("They match!")
            console.log("imagefile path: " + imageFilePathArray[0])
            console.log("this.findcharacterList[0]: " + this.findCharacterList[0])
        } else {
            console.log("They do NOT Match")
            console.log("imagefile path:" + imageFilePathArray[0])
            console.log("this.findcharacterList[0]: " + this.findCharacterList[0])
        }
    },

    makeListofCharactersToFind: function () {
        let duplicateListofChar = listofChar // duplicates the original list of image sources
        
        for (let i = 0; i < 5; i++) {
            
            const randNumber = getRndInteger(0, duplicateListofChar.length-1) // creates a random index number based on length of array
            const findThisCharacter = duplicateListofChar[randNumber] // assigns a random image source to the variable
            this.findCharacterList.push(findThisCharacter) // adds the random image to a new array
            duplicateListofChar.splice(randNumber,1) // deletes the random image from the duplicate list of image sources so there are no repeats in the new array
            
        }
        this.doNotFindCharList = duplicateListofChar
        
    },

    addListofCharactersToItemDiv: function () {
        
        const checklist = document.querySelector(".image_list") //calls the checklist div
        for (let i = 0; i < this.findCharacterList.length; i++) {

            //create list item element
            let listItemElement = document.createElement("li")

            //create image element
            let imageListElement = document.createElement("img")

            //create image source
            imageListElement.src = this.findCharacterList[i]
            imageListElement.style.height = "50px"
            
            //append image to list item
            listItemElement.append(imageListElement)
           
            //append list item to checklist
            checklist.append(listItemElement)
        }
        
    }
}

findItems.makeListofCharactersToFind()
findItems.addListofCharactersToItemDiv()
console.log("These are the items to be found: " , findItems.findCharacterList)
console.log("These are the items NOT to be found: ", findItems.doNotFindCharList)
findItems.checkOffIfCorrectImageFound()



























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