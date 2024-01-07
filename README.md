# Milestone-Project-One

Milestone project for Software development bootcamp: Web Browser Game

About my game:
It is a search and find game where it tells you what images to look for, and you click on them. 
There is an opener page where you can click on a start link that goes to forest.html
The five items you have to find are randomly generated, as is the position of the items in the scene. 
When you find a correct item, it is removed from the scene, and a check mark is placed next to the list item.
When you find all five items, a window alert tells you that you have found all items.


Sources:
Opener Background.png: used an image of a magnifying glass from https://publicdomainvectors.org/ and edited it in paint3D in Windows to make it different colors. Then used microsoft word to create a collage of the different images and created an image file from that.
Forest_background.png: https://opengameart.org/content/forest-scene No attribution required. 
From https://publicdomainvectors.org/:
    - Check-mark.png
    - bee.png
    - blue_bird.png
    - brown_mouse.png
    - Cartoon_Butterfly.png
    - cartoon_duck.png
    - Cartoon-Ant.png
    - Cartoon-Frog.png
    - Cartoon-owl-asleep.png
    - Cartoon-Snail.png
    - fat_yellow_bird.png
    - fox.png
    - grey_blue_butterfly.png
    - grey_mouse.png
    - monkey.png
    - red_bird.png
    - reindeer.png
    - snail.png
    - Snake-BACK.png
    
    MY NOTES

    12/22/2023
    - check for overlap of images
    - make the scene height and width responsive
    - using the responsive height and width of the background scene, add the limits of the images to be added to the scene
    - create a welcome page
    - create a try again area on the screen instead of a window alert
    - create a you won window on the screen. create buttons to continue or to go back to main menu
    
    12/30/23
    - offsetWidth returns a value of 0. 

    01/04/2024
    - create a menu to return to homepage if in search scene.
    - change window alert for try again to be a div within an aside that shows text "try again", the font color changes for each new wrong selection
    - change window alert when completed to show a play this scene again or go home.
    - when have multiple scenes, have options to choose which scene on home page.
    
    01/04/2024
    - use an array of random integers to create the left and top values instead of using offset values
    - when ready and have time to do so, can work on the logic for overlapping images when they are rendered, or before they are rendered possibly
    - take away the ability to click on the scene after all items have been found

    bonus:
    - add a timer for while playing the scene, a pause button that blurs/hides the scene.
    - add your time for each time played in the finish alert
    - store shortest time, long term, with option to add name to the "fastest time" records for each scene.
    - maybe have a separate html file for stats. to link it on the opener page
    - LOTS OF IDEAS AND LOTS OF LOGIC
    
    
    ideas:

search and find game like where's waldo
- have multiple html files for the different scenes
- main background image
- smaller images to find (more later)
- a timer
- a list of names of items to find (or number of the same item)
- a score keeper
- Congratulations you did it alert/screen
    -- images in an array, if clicked then add marker of some kind, 
    -- when all images have marker, you win
    -- use a for/if loop to go through the array of images.
- try again
- ability to click on items and have them removed from the main image div
- when images are removed have them move to the "bank", have the matching image marked out, and/or have a counter
- have a starting window with a start button 


Bonus items:

- settings button for music and sound effects 
- easy, medium, and hard: type of photo, number of items, faster time?
- lose points when wrong item is clicked on
    
    
    