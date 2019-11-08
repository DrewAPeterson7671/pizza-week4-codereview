// Backend Logic

function Pizza(customerName, pizzaSize, pizzaToppings) {
  this.customerName = customerName,
  this.pizzaSize = pizzaSize,
  this.pizzaToppings = pizzaToppings,
  this.pizzaPrice = 0.0
}

Pizza.prototype.calcPrice = function() {
  var toppingPrice = 0;
  this.pizzaToppings.forEach(function(pizzaTopping){
    if (pizzaTopping === "pepperoni") {
      toppingPrice += 2.1;
      } else if (pizzaTopping === "chicken") {
        toppingPrice += 1.5;
      } else if (pizzaTopping === "anchovies") {
        toppingPrice += 2.65;
      } else {
        toppingPrice += 0.5;
      }
  });
  console.log(toppingPrice);
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





// var pizzaOrder = new Pizza("George", "small", ["pepperoni", "chicken", "olives", "mushrooms"])
//

//Frontend JavaScript

$(document).ready(function() {
  $("#form-group").submit(function(event) {
    event.preventDefault();


var pizzaToppingsArray = [];

    var customerName = $("#customerNameInput").val();
    var pizzaSize = $("input:radio[name=sizeInput]:checked").val();
    var pizzaToppings = $("input:checkbox[name=toppingsInput]:checked").each.val();

    // (function() {
    //   var pizzaToppingsArray = $(this).val();
    // });

    console.log(pizzaToppingsArray);


    // pizzaToppings.forEach(function(pizzaTopping) {
    //   pizzaToppingsArray.push(pizzaTopping.val());
    // });

    var myPizza = new Pizza(customerName, pizzaSize, pizzaToppings);
    console.log(myPizza);
    var price = myPizza.calcPrice;


    $("#outputPrice").text(price);
    $("#outputCustomerName").text(customerName);


    console.log(myPizza.calcPrice());



  });
});
