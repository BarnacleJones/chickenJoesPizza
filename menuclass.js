class MenuItem{
    constructor(
        name,
        ingredients,
        price
    ){
    this.name = name;
    this.ingredients = ingredients;
    this.price = price
}


///QUESTION FOR ANDREW



//why does the onclick function not allow two parameters???

// I get strange error messages when I make the second parameter the menu item name


//eg:
//<button onclick="addToOrder(${this.price} + "" + ${this.name})">Add to order</button>`

//I've tried with so many variations of concatinating those parameters......


addToMenu(){
    const item = `
    <h2>${this.name}:</h2>
    <p>${this.ingredients}</p>
    <p>$${this.price}</p>
    <button onclick="addToOrder(${this.price}, '${this.name}')">Add to order</button>`
    return item;
}
}

export default MenuItem;
