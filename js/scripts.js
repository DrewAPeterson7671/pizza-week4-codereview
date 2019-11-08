function Pizza(customerName, pizzaSize, pizzaToppings) {
  this.customerName = customerName,
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings,
  this.pizzaPrice = 0
}

Pizza.prototype.calcPrice = function() {
  if (this.pizzaSize === "extra large") {
    this.pizzaPrice += 14;
    } else if (this.pizzaSize === "large") {
      this.pizzaPrice += 12;
    } else if (this.pizzaSize === "medium") {
      this.pizzaPrice += 10;
    } else if (this.pizzaSize === "small") {
      this.pizzaPrice += 8;
    } else {
      return console.log("No Joy");
    }
      return this.pizzaPrice;
  };



var pizzaOrder = new Pizza("George", "small", ["Pepperoni", "Olives", "Mushrooms"])

console.log(pizzaOrder.calcPrice());
