import MenuItem from "./menuclass.js";

//event listeners
document.querySelector(".pizzaButton").addEventListener("click", pizzas);
document.querySelector(".sidesButton").addEventListener("click", sides);
document.querySelector(".drinksButton").addEventListener("click", drinks);
document.querySelector(".deliveryButton").addEventListener("click", deliveryChoice);
document.querySelector(".pickupButton").addEventListener("click", pickupChoice);

//create all menu items

//pizzas
const classicVeg = new MenuItem("Classic Vegetarian","Olives, tomatoes, cheese, spinach, basil",14.99)
const classicVegan = new MenuItem("Classic Vegan","Olives, tomatoes, vegan cheese, spinach, basil",16.99)
const newVeg = new MenuItem("Joes Veg","Pineapple, capsicum, tomatoes, cheese, spinach, basil",14.99)
const newVegan = new MenuItem("Joes Vegan","Pineapple, capsicum, tomatoes, vegan cheese, spinach, basil",16.99)

//Sides

const garlicBread = new MenuItem("Classic Garlic bread","Oven Fresh, vegan/vegetarian friendly",4.99)
const garlicTwists = new MenuItem("Garlic twists","Salted garlic bread twists, vegan friendly",6.99)
const brownies = new MenuItem("Joes Brownie","More chocolate than you know what to do with",4.99)
const veganbrownies = new MenuItem("Joes Vegan Brownie","A vegan take on the famous Joe's Brownie",6.99)

//Drinks

const stout = new MenuItem("Joes stout","Made in Joe's brewery, a great dessert pairing",4.99)
const lager = new MenuItem("Joes Lager","Light, quenching lager. Made for our pizza's",4.99)
const ale = new MenuItem("Joes Ale","Another perfect pizza pairing",4.99)
const porter = new MenuItem("Joes Porter","A heavy drink, great with a brownie",4.99)

//add menu items to page
function pizzas(){
document.querySelector(".menu-heading").innerText = "Our delicious range of Pizzas:"
document.querySelector(".product1").innerHTML = classicVeg.addToMenu();
document.querySelector(".product2").innerHTML = classicVegan.addToMenu();
document.querySelector(".product3").innerHTML = newVeg.addToMenu();
document.querySelector(".product4").innerHTML = newVegan.addToMenu();
}

function sides(){
document.querySelector(".menu-heading").innerText = "Our delicious sides, cooked in house:"
document.querySelector(".product1").innerHTML = garlicBread.addToMenu();
document.querySelector(".product2").innerHTML = garlicTwists.addToMenu();
document.querySelector(".product3").innerHTML = brownies.addToMenu();
document.querySelector(".product4").innerHTML = veganbrownies.addToMenu();
}
function drinks(){
document.querySelector(".menu-heading").innerText = "Drinks to wash it all down:"
document.querySelector(".product1").innerHTML = stout.addToMenu();
document.querySelector(".product2").innerHTML = lager.addToMenu();
document.querySelector(".product3").innerHTML = ale.addToMenu();
document.querySelector(".product4").innerHTML = porter.addToMenu();
}


function deliveryChoice(){
    document.querySelector(".pickupOrDelivery").innerText = "Delivery";
    const item = document.createElement("P");
    item.innerText = 5 + " Delivery Fee";
    document.querySelector(".totals").append(item);
    console.log("working");
    //var deliveryFee =5; 
        
}

function pickupChoice(){
    document.querySelector(".pickupOrDelivery").innerText = "Pickup";
    const item = document.createElement("P");
    item.innerText = "Free - Pickup";
    document.querySelector(".totals").append(item);
    console.log("working");
}


