
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
    image.className = "scene_character"
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


/***********************************************************************************************************************************************
 ***********************************************************************************************************************************************
 ************************************************************************************************************************************************/

 /* Working on a find Items object. This will hold the list of characters to be found, and place them in a separate div. 
    This will have an array of items that are not supposed to be found. 
    functions:  create the two lists
                create an event listener for all images in the HTML document: when the clicked on source matches the source from the find characters list, then it will be removed from the main scene, and the list item will change.
    */
findItems = {
    
    findCharacterList: [],

    doNotFindCharList: [],

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
        
    },

    // when found item is clicked on, it is removed from the scene and a checkmark is added next to the list
    checkOffIfCorrectImageFound: function (){

        let sceneCharacter = document.querySelectorAll(".scene_character") // makes a node list of all images that have a class name of scene_character. This is used to make sure only the images inside the scene have the event listener and not the images in the to be found list.
        
        sceneCharacter.forEach((item)=> {
            item.addEventListener("click", function(){
                console.log("This image has been clicked on: " , item.attributes.src.nodeValue)
                // to loop through each characterlist item and see if file paths match
                console.log(findItems.findCharacterList)
                let foundIt = false
                for (let i = 0; i < findItems.findCharacterList.length; i++) {
                    if (item.attributes.src.nodeValue === findItems.findCharacterList[i]) {
                        console.log("You Found IT!")
                        item.remove()
                        foundIt = true
                        break
                    } 
                }
                if (foundIt === false ){ window.alert("Try Again!")}
                
            })
        })
       
    },
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