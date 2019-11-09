// Backend Logic

function Pizza(customerName, pizzaSize, pizzaToppingsArrays) {
  this.customerName = customerName,
  this.pizzaSize = pizzaSize,
  this.pizzaToppingsArrays = pizzaToppingsArrays,
  this.pizzaPrice = 0.0
}

Pizza.prototype.calcPrice = function() {
  var toppingPrice = 0.0;
  this.pizzaToppingsArrays.forEach(function(pizzaToppingsArray) {
    if (pizzaToppingsArray === "pepperoni") {
      toppingPrice += 2.1;
      } else if (pizzaToppingsArray === "chicken") {
        toppingPrice += 1.5;
      } else if (pizzaToppingsArray === "anchovies") {
        toppingPrice += 2.65;
      } else {
        toppingPrice += 0.5;
      }
  });
    this.pizzaPrice += toppingPrice;
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






//Frontend JavaScript

$(document).ready(function() {
  $("#form-group").submit(function(event) {
    event.preventDefault();


    var pizzaToppingsArrays = [];
    var toppingsSort = ""

    var customerName = $("#customerNameInput").val();
    var pizzaSize = $("input:radio[name=sizeInput]:checked").val();
    var pizzaToppings = $("input:checkbox[name=toppingsInput]:checked").each(function() {
      toppingsSort = $(this).val();
      pizzaToppingsArrays.push(toppingsSort);
    });

console.log(pizzaToppingsArrays);



    var myPizza = new Pizza(customerName, pizzaSize, pizzaToppingsArrays);
    console.log(myPizza);
    console.log(myPizza.pizzaToppingsArrays);
    var price = myPizza.calcPrice();

    // var pizzaOrder = new Pizza("George", "small", ["pepperoni", "chicken", "olives", "mushrooms"])
    //
    // var price = pizzaOrder.calcPrice();


    $("#outputPrice").text("$" + price);
    $("#outputCustomerName").text(customerName);


    console.log(myPizza.calcPrice());



  });
});
