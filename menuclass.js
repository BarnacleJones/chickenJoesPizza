

class MenuItem{
    constructor(
        name,
        ingredients,
        price
    )
{
    this.name = name;
    this.ingredients = ingredients;
    this.price = price
}

addToMenu(){
    const item = `
    <h2>${this.name}:</h2>
    <p>${this.ingredients}</p>
    <p>${this.price}</p>
    <button>Add to order</button>
    `
    return item;
}
}

export default MenuItem
