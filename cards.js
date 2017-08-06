console.log("dynamic cards!")

// Requirements

// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, 
//create a new card element in the DOM that includes it's own delete button. 
//You decide the height/width of the card.

// When the user clicks the Delete button, the containing card, and no other cards, 
//should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

//define all the document.getElements... 

var creAte = document.getElementById("createButton");
var deLete = document.getElementsByClassName("deleteButton"); //the DELETE BUTTON needs to be an array so the js function can manipulate it
var inPut = document.getElementById("textInput");
var msgArea = document.getElementById("msgArea");
var eachCard = document.getElementsByClassName("card"); //the CARD ELEMENT needs to be an array so the js function can manipulate it

//.addEventListeners for the CREATE and DELETE buttons...

creAte.addEventListener("click", createMsg);

//create a function to delete each specific card 
function createMsg() {
    //outPut the input text plus the deLete button I started up above.. 
    var outPut = inPut.value + " " + "<button class='deleteButton'>DELETE</button>" + "<p>";
    console.log(createMsg);
    msgArea.innerHTML += outPut;
    for (var i = 0; i < deLete.length; i++) {
        deLete[i].addEventListener("click", deleteCard);
    }
};
//create a function to delete each specific card 
function deleteCard() {
    // outPut.value = "";
};