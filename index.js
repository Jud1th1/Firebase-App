import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-7f16f-default-rtdb.firebaseio.com/"
}

const app = initializeApp

// Get element
const textField = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

const app = initializeApp(appSettings) //App variable with arguments to give the app settings we set up 
const database = getDatabase(app) //Database variable that uses the getDatabse and passes in app
const shoppingListInDB = ref(database, "shoppingList") //The reference 

// add an event listener 
addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)
    
    console.log(inputValue)
})