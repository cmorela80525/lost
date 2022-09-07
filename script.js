//create dog class
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.health = 100;
        this.strength = 4;
    }
}

//create characters class
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.strength = 5;
    }
}


storyLine = {
    intro: {
        h1: "The Lost Dog",
        p: "While out on a walk with his human, a dog named Spot sees a tasty looking squirrel and starts chasing after it. He ran so fast trying to catch the squirel that he eventually got tired and decided to give up but suddenly he realized he had no idea where he was. Help Spot find his way home safely.",
        button: "Click here to begin"
    },
    scene1: {  //scenario1 chosen
        p: "Spot started to panic. He had never been outside on his own without his human. He wants to go home but he's not sure which way to go. What should he do?",
        button1: "Ask a stranger for help", //next: scenario1
        button2: "Guess which way to go"  //next: scenario2
    },
    scenario1: {
        p: "Spot sees an old man getting ready to get into his car. He approaches the old man and asks him for help finding his way back home, but it seems the old man doesn't understand what he is saying. The old man picks Spot up, opens the back to his car and starts to put Spot inside.",
        button1: "Bite him!",  //next: scenario 1 figth scene in game
    },
    scenario1_end: {  //(run away)
        p: "Spot runs away from the old man. He stops to take a rest when suddenly he here's someone calling his name. His human found him!",
        button1: "Start Over"
    },     //left of (1st scenario) --------------

    scenario2: {  
        p: "Spot guesses which way to go and begins walking. After walking for a few minutes he is stopped by a wolf that is blocking his path.",
        button1: "Fight him off"  //next: scenario 2 fight scene in game
    },
    scenario2_end: {
        p: "Spot runs away from the Evil Wolf. He's a little hurt, but he is glad he doesn't have to worry about that wolf anymore. He continues on his path until he hears a voice shouting his name. It's his human!",
        button1: "start over"
    }



};

//CREATE CHARACTERS
//create dog
const playerDog = new Dog('Spot', 4,)

//create characters
const man = new Character('Old Man', 10)
const wolf = new Character('Evil Wolf', 8)
const bear = new Character('Big Bear', 20)

//---------------------
//SELECT ELEMENTS

//Buttons (to hide)
const buttons = document.querySelectorAll(".buttons")
//Divs (to hide)
const divs = document.querySelectorAll(".divs")

//Intro Div
const introDiv = document.getElementById("intro")
const introH = document.getElementById("intro-h")
const introP = document.getElementById("intro-p")
const introButton = document.getElementById("intro-button")

//Choice Div
const choiceDiv = document.getElementById("choice")
const choiceP = document.getElementById("choice-p")
const choice1 = document.getElementById("choice1")
const choice2 = document.getElementById("choice2")


//Story Div
const storyDiv = document.getElementById("story")
const storyP = document.getElementById("story-p")
const storyButton = document.getElementById("story-button")

//StoryA Div
const storyADiv = document.getElementById("storyA")
const storyAP = document.getElementById("storyA-p")
const storyAButton = document.getElementById("storyA-button")

//StoryB Div - scenario 2
const storyBDiv = document.getElementById("storyB")
const storyBP = document.getElementById("storyB-p")
const storyBButton = document.getElementById("storyB-button")

//StoryC Div
const storyCDiv = document.getElementById("storyC")
const storyCP = document.getElementById("storyC-p")
const storyCButton = document.getElementById("storyC-button")



// Functions 
const addText = (element, storyLine) => {
    element.textContent = storyLine
}

const hideElement = (element) => {
    element.style.display = 'none'
}

const unhideElement = (element) => {
    element.style.display = 'inline-block'
}


const removeElement = (element) => {
    element.remove()
}


//ACTIONS AND FUNCTION CALLS

//INTRO
// 1. Hide buttons (with class 'buttons'), 2. add text to h1, introP, and button
///1.hide buttons so they do not show up on screen yet
for (let button of buttons) { //loop through list of button nodes in hiddenElements
    hideElement(button)  //pass each button element as an argument through hideElement function to hide by setting style to none
}
for (let div of divs) {
    hideElement(div)
}

//2. add text
addText(introH, storyLine.intro.h1)
addText(introP, storyLine.intro.p)
addText(introButton, storyLine.intro.button)

//SCENE 1
//add onclick event that: removes introDiv, unhide choice div, adds text to choiceP and choice buttons, unhides choice buttons

introButton.addEventListener('click', () => {
    introDiv.remove()
    unhideElement(choiceDiv)
    addText(choiceP, storyLine.scene1.p)
    unhideElement(choice1)
    unhideElement(choice2)
    choice1.textContent = storyLine.scene1.button1
    choice2.textContent = storyLine.scene1.button2
})

//SCENARIO 1 
//add onclick event that: removes choiceDiv, unhide choiceA div, adds text to choiceAP and choiceA buttons, unhides choiceA buttons

//1.add event to choice1 button that: adds text to choiceP, remove choice1 choice2 buttons, create new choice 1 and choice 2 buttons, add text to new buttons (using choice div again so no need to unhide elements, but need to remove old buttons and add new ones so onclick event works)
//later: add onclick event to choice2 button that:  hides Choice Div, adds text to storyP and storyButton, unhides storyButton. See: Scenario 2

//1.
choice1.addEventListener('click', () => {
    choiceDiv.remove()
    unhideElement(storyDiv)
    addText(storyP, storyLine.scenario1.p)
    unhideElement(storyButton)
    storyButton.textContent = storyLine.scenario1.button1
})



//-----------------------------------------------
//Fight Scene 1
//-----------------------------------------------
// Get Elements for Fight Scene
let enemy1Stats = document.getElementById('enemy1-stats') //select and store p tag for enemy stats
let spotStats = document.getElementById('spot-stats')  // select and store p tag for spot stats


const containerDiv = document.getElementById('container')
const bottomDiv = document.getElementById('bottom-div')  //select bottom div which will hold buttons
const bottomP = document.getElementById('commentary')

const bottomButton = document.createElement('button')  //create button
bottomButton.setAttribute('id', 'bottom-button') //add id to button
bottomButton.textContent = "bite him!"
bottomDiv.appendChild(bottomButton) //append button to bottom div

//Set up fight scene: add event, when clicked: fight scene by removing storyDiv, adding (unhide) container div and bottom div
storyButton.addEventListener('click', () => {
    removeElement(storyDiv)
    containerDiv.style.display = 'flex'
    bottomDiv.style.display = 'flex'
})



const newButton = document.createElement('button')
newButton.setAttribute('id', 'new-button')
bottomDiv.appendChild(newButton)
hideElement(newButton)
//first event: reduce man's health, add text, remove event listener so second event can happen
bottomButton.addEventListener('click', function doAll() {
    man.health -= playerDog.strength
    enemy1Stats.textContent = `The Old Man's health is now ${man.health}`
    bottomP.textContent = `Spot bites the old man. The old man's health has gone down ${playerDog.strength} points. Watch out, he looks angry.`
    bottomButton.textContent = "continue"
    bottomButton.removeEventListener("click", doAll, false)  //remove event when done
    bottomButton.addEventListener('click', function doAll() {  //add second event listener
        playerDog.health -= man.strength
        spotStats.textContent = `Spot's health is now ${playerDog.health}`
        bottomP.textContent = `The old man curses at Spot and throws him to the ground. Spot's health has gone down ${man.strength} points`
        bottomButton.remove()
        unhideElement(newButton)
        newButton.textContent = "Run away"
    })
}, false)

//-----------------------------------------------
//End Fight Scene 1
//-----------------------------------------------

//Spot runs away
newButton.addEventListener('click', () => {
    containerDiv.remove()
    bottomDiv.remove()
    unhideElement(storyADiv)
    addText(storyAP, storyLine.scenario1_end.p)
    unhideElement(storyAButton)
    storyAButton.textContent = storyLine.scenario1_end.button1
})

//start over/ reset: reload page
storyAButton.addEventListener('click', () => {
    window.location.reload();
})

//------------------------------------------
//Scenario 2

choice2.addEventListener('click', () => {
    choiceDiv.remove()
    unhideElement(storyBDiv)
    addText(storyBP, storyLine.scenario2.p)
    unhideElement(storyBButton)
    storyBButton.textContent = storyLine.scenario2.button1
})




//-----------------------------------------------
//Fight Scene 2
//-----------------------------------------------
// Get Elements for Fight Scene
let enemy2Stats = document.getElementById('enemy2-stats') //select and store p tag for enemy stats
let spotStats2 = document.getElementById('spot-stats2')  // select and store p tag for spot stats


 const containerDiv2 = document.getElementById('container2')
 const bottomDiv2 = document.getElementById('bottom-div2')  //select bottom div which will hold buttons
 const bottomP2 = document.getElementById('commentary2')

const bottomButton2 = document.createElement('button2')  //create button
bottomButton2.setAttribute('id', 'bottom-button2') //add id to button
bottomButton2.textContent = "bite him!"
bottomDiv2.appendChild(bottomButton2) //append button to bottom div

//Set up fight scene: add event, when clicked: fight scene by removing storyDiv, adding (unhide) container div and bottom div
storyBButton.addEventListener('click', () => {
    removeElement(storyBDiv)
    containerDiv2.style.display = 'flex'
    bottomDiv2.style.display = 'flex'
})



const newButton2 = document.createElement('button2')
newButton2.setAttribute('id', 'new-button2')
bottomDiv2.appendChild(newButton2)
hideElement(newButton2)
//first event: reduce wolf's health, add text, remove event listener so second event can happen
bottomButton2.addEventListener('click', function doAll() {
    wolf.health -= playerDog.strength
    enemy2Stats.textContent = `The Evil Wolf's health is now ${wolf.health}`
    bottomP2.textContent = `Spot bites the wolf. The wolf's health has gone down ${playerDog.strength} points. Watch out, he looks angry.`
    bottomButton2.textContent = "continue"
    bottomButton2.removeEventListener("click", doAll, false)  //remove event when done
    bottomButton2.addEventListener('click', function doAll() {  //add second event listener
        playerDog.health -= wolf.strength
        spotStats2.textContent = `Spot's health is now ${playerDog.health}`
        bottomP2.textContent = `The Evil Wolf bites and scratches Spot. Spot's health has gone down ${man.strength} points`
        bottomButton2.remove()
        unhideElement(newButton2)
        newButton2.textContent = "Run away"
    })
}, false)

//-----------------------------------------------
//End Fight Scene 2
//-----------------------------------------------

//Spot runs away
newButton2.addEventListener('click', () => {
    containerDiv2.remove()
    bottomDiv2.remove()
    unhideElement(storyCDiv)
    addText(storyCP, storyLine.scenario2_end.p)
    unhideElement(storyCButton)
    storyCButton.textContent = storyLine.scenario2_end.button1
})

//start over/ reset: reload page
storyCButton.addEventListener('click', () => {
    window.location.reload();
})