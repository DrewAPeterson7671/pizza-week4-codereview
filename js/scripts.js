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
      toppingPrice += 2.11;
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
    this.pizzaPrice += 14.01;
  } else if (this.pizzaSize === "large") {
    this.pizzaPrice += 12.03;
  } else if (this.pizzaSize === "medium") {
    this.pizzaPrice += 10.17;
  } else if (this.pizzaSize === "small") {
    this.pizzaPrice += 8.34;
  } else {
    return console.log("No Joy");
  }
  return this.pizzaPrice.toFixed(2);
};




//Frontend JavaScript

$(document).ready(function() {
  $("#form-group").submit(function(event) {
    event.preventDefault();




    var pizzaToppingsArrays = [];
    var toppingsSort = "";

    var customerName = $("#customerNameInput").val();
    var pizzaSize = $("input:radio[name=sizeInput]:checked").val();
    var pizzaToppings = $("input:checkbox[name=toppingsInput]:checked").each(function() {
      toppingsSort = $(this).val();
      pizzaToppingsArrays.push(toppingsSort);
    });

    var myPizza = new Pizza(customerName, pizzaSize, pizzaToppingsArrays);
    myPizza.pizzaPrice = myPizza.calcPrice();

    $("#customerNameInput").val("");
    $(".output-area").show();
    $("#outputPrice").text("$" + myPizza.pizzaPrice);
    $("#outputName").text(myPizza.customerName);

  });
});
