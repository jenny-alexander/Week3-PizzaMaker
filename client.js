
//while user wants to make pizza (use confirm() prompt)
while (confirm("Do you want to make a pizza?") === true ) {
//prompt user for sauce, cheese, crust, toppings & slices
    let userSauce = prompt ("What's your sauce? Red or white?");
    let userCheese = prompt ("Do you want cheese? Y or N");
    let userCrust = prompt ("What kind of crust do you like?");
    let userToppings = prompt ("Choose your toppings");
    let userSlices = prompt ("How many slices would you like?");

    //call the makePizzas function with the users choices
    makePizzas( userSauce, userCheese, userCrust, userToppings, userSlices );
    //...back to question if they want to make a pizza and so on
}  

function makePizzas(sauce,cheese,crust,toppings,slices) {
        
    if (cheese === 'Y') {
        cheese = true;
    } else {
        cheese = false;
    }

    let pizza = {
        sauce: sauce,
        cheese: cheese, //true/false
        crust: crust, //string(i.e. deepdish, thin, stuffed,classic)
        toppings: toppings, 
        slices: slices //number
    
    }
    console.log(pizza);
}