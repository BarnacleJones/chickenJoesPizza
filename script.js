import MenuItem from "./menuclass.js";

//event listeners
document.querySelector(".pizzaButton").addEventListener("click", pizzas);
//create all menu items

//pizzas
const classicVeg = new MenuItem(
    "Classic Vegetarian",
    "Olives, tomatoes, cheese, spinach, basil",
    "$14.99",
)
const classicVegan = new MenuItem(
    "Classic Vegan",
    "Olives, tomatoes, vegan cheese, spinach, basil",
    "$16.99",
)
const newVeg = new MenuItem(
    "Joe's Veg",
    "Pineapple, capsicum, tomatoes, cheese, spinach, basil",
    "$14.99",
)
const newVegan = new MenuItem(
    "Joe's Vegan",
    "Pineapple, capsicum, tomatoes, vegan cheese, spinach, basil",
    "$16.99",
)
function pizzas(){
 document.querySelector(".menu-heading").innerText = "Our delicious range of Pizzas:"
 document.querySelector(".product1").innerHTML = classicVeg.addToMenu();
 document.querySelector(".product2").innerHTML = classicVegan.addToMenu();
 document.querySelector(".product3").innerHTML = newVeg.addToMenu();
 document.querySelector(".product4").innerHTML = newVegan.addToMenu();
}