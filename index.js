import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-7f16f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings) //App variable with arguments to give the app settings we set up 
const database = getDatabase(app) //Database variable that uses the getDatabse and passes in app
const shoppingListInDB = ref(database, "shoppingList") //The reference 

// Get element
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list") //Add shopping list from html to js

// add an event listener 
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)

    clearInputFieldEl()
})

// call onValue function so we can use realtime snapshot
onValue(shoppingListInDB, function(snapshot) {
    let itemsArray = Object.values(snapshot.val()) //make object an array

    clearShoppingListEl()
     //for loop to show each item
    for (let i = 0; i < itemsArray.length; i++){
        appendItemToShoppingListEl(itemsArray[i])
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

//add function to take in item and set value to empty string
function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function addToListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}