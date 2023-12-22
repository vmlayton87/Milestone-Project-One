
// random number generator, includes the min and max value. will use to choose pixel coordinates for scene characters, will use for index value for choosing images to be found
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

// list of items to be put into scene
const listofSkyChar = [
    "./Assets/Forest/bee.png",
    "./Assets/Forest/blue_bird.png",
    "./Assets/Forest/Cartoon_Butterfly.png",
    "./Assets/Forest/Cartoon-owl-asleep.png",
    "./Assets/Forest/fat_yellow_bird.png",
    "./Assets/Forest/grey_blue_butterfly.png",
    "./Assets/Forest/red_bird.png",
]

const listofLandChar = [
    "./Assets/Forest/brown_mouse.png",
    "./Assets/Forest/cartoon_duck.png",
    "./Assets/Forest/Cartoon-Ant.png",
    "./Assets/Forest/Cartoon-Frog.png",
    "./Assets/Forest/Cartoon-Snail.png",
    "./Assets/Forest/fox.png",
    "./Assets/Forest/grey_mouse.png",
    "./Assets/Forest/monkey.png",
    "./Assets/Forest/reindeer.png",
    "./Assets/Forest/snail.png",
    "./Assets/Forest/Snake-BACK.png"
]

const listofChar = listofSkyChar.concat(listofLandChar)

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
 

/* working original add scene characters function

function addSceneCharacters () {
    
    for (let i = 0; i < listofChar.length; i++) {
        let left = getRndInteger(1, 500)
        let bottom = getRndInteger(1, 500)
        place(newImage(listofChar[i])).to(left,bottom);
    }
    
}
*/
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
    
    findCharacterList: [], // list of characters to find 

    doNotFindCharList: [], // the rest of the characters, not supposed to find these

    makeListofCharactersToFind: function () {
        let duplicateListofChar = listofChar // duplicates the original list of image sources
        
        for (let i = 0; i < 5; i++) {
            
            const randNumber = getRndInteger(0, duplicateListofChar.length-1) // creates a random index number based on length of array
            const findThisCharacter = duplicateListofChar[randNumber] // assigns a random image source to the variable name
            this.findCharacterList.push(findThisCharacter) // adds the random image to a new array
            duplicateListofChar.splice(randNumber,1) // deletes the random image from the duplicate list of image sources so there are no repeats in the new array
            
        }
        this.doNotFindCharList = duplicateListofChar // adds the spliced list of images to the do not find list
        
    },

    addListofCharactersToItemDiv: function () {
        
        const checklist = document.querySelector(".image_list") //calls the checklist div
        for (let i = 0; i < this.findCharacterList.length; i++) {

            //create list item element
            let listItemElement = document.createElement("li")
            listItemElement.id = this.findCharacterList[i]

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
    //event listener function

    
    checkOffIfCorrectImageFound: function (){

        let sceneCharacter = document.querySelectorAll(".scene_character") // makes a node list of all images that have a class name of scene_character. This is used to make sure only the images inside the scene have the event listener and not the images in the to be found list.
        
        // goes through each sceneCharater node list item and adds an onclick event listener
        sceneCharacter.forEach((item)=> {
            item.addEventListener("click", function(){
                console.log("This image has been clicked on: " , item.attributes.src.nodeValue) //making sure the correct path is chosen to check for the file path name

                // to loop through each characterlist item and see if file paths match
                           
                let foundIt = false // to set a boolean value for if something has been clicked on. Will allow for a try again alert message for now, and points to be reduced later.
                for (let i = 0; i < findItems.findCharacterList.length; i++) {
                    if (item.attributes.src.nodeValue === findItems.findCharacterList[i]) {
                        window.alert("You found it!")

                        item.remove() // removes the item from the scene when it is found
                        
                        let foundItem = document.getElementById(findItems.findCharacterList[i])
                        let checkmarkImageElement = document.createElement("img")
                        checkmarkImageElement.src = "./Assets/Check-mark.png"
                        checkmarkImageElement.style.height = "50px"
                        foundItem.append(checkmarkImageElement)
                        foundIt = true
                        break // stops the for loop when the correct item is found
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

