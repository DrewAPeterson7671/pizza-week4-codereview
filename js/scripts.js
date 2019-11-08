function Pizza(customerName, pizzaSize, pizzaToppings) {
  this.customerName = customerName,
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings,
  this.pizzaPrice = 0
}

Pizza.prototype.calcPrice = function() {
  if (this.pizzaSize === "extra large") {
    return this.pizzaPrice = 14;
  } else {
    return console.log("No Joy");
  }
};

var pizzaOrder = new Pizza("George", "extra large", ["Pepperoni", "Olives", "Mushrooms"])



console.log(pizzaOrder.pizzaPrice);
