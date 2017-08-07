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
var inPut = document.getElementById("textInput");
var msgArea = document.getElementById("msgArea");


// add Event Listeners for the CREATE button...

creAte.addEventListener("click", createMsg);

//create a function to add created msgs to the output area:
function createMsg() {
    // create a new div area to put the stuff into, and what stuff that will be:
    var eachCard = document.createElement("div");
    eachCard.innerHTML = `<hr><p>${inPut.value}</p>`;
    msgArea.appendChild(eachCard);
    console.log(inPut.value);

    // define the button and text field variables 
    var deLete = document.createElement("button");
    var text = document.createTextNode("DELETE");

    //smush them together in the same output spot
    deLete.append(text);
    eachCard.append(deLete);

    //listen to the delete button
    deLete.addEventListener("click", deleteCard);

    //define the delete-each function
    function deleteCard() {
        console.log(event.currentTarget);
        let eachCard = this.parentNode;
        msgArea.removeChild(eachCard);
    }
};