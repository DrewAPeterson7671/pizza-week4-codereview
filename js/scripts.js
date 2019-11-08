function Pizza(customerName, pizzaSize, pizzaToppings,pizzaPrice) {
  this.customerName = customerName,
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings,
  this.pizzaPrice = pizzaPrice
}



var pizzaOrder = new Pizza("George", "medium", ["Pepperoni", "Olives", "Mushrooms"], "0")
console.log(pizzaOrder);
