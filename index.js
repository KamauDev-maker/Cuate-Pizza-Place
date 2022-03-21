$(document).ready(function() {
    $("#order-details").hide();
    $("#deliver").hide();
    let totalPriceArray = [];
  function Order(size, crust, flavour, toppings, amount) {
    this.size = size;
    this.crust = crust;
    this.flavour = flavour;
    this.toppings = toppings;
    this.pizzaPrice = 0;
    this.amount = amount;
  }
  Order.prototype.pizzaCost = function() {
    if (this.size === "small-pizza") {
      this.pizzaPrice += 500;
    } else if (this.size === "medium-pizza") {
      this.pizzaPrice += 750;
    } else if (this.size === "large-pizza") {
      this.pizzaPrice += 1000;
    }
    if (this.crust === "cheese-filled") {
      this.pizzaPrice += 100;
    } else if (this.crust === "thick") {
      this.pizzaPrice += 150;
    } else if (this.crust === "stuffed") {
      this.pizzaPrice += 150;
    } else if (this.crust === "crispy") {
      this.pizzaPrice += 150;
    }
    if (this.toppings === "pepperoni") {
      this.pizzaPrice += 100;
    } else if (this.toppings === "sausage") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "bacon") {
      this.pizzaPrice += 200;
    } else if (this.toppings === "mushrooms") {
      this.pizzaPrice += 150;
    } else if (this.toppings === "chicken") {
      this.pizzaPrice += 150;
    }
  };
  function Address(address) {
    this.address = address;
    this.deliveryAddress = (address);
  }
  Order.prototype.finalCost = function() {
    let cartTotalPrice = [];
    for (let arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
      cartTotalPrice += totalPriceArray[arrayElement];
    }
    return cartTotalPrice;
  };
  $(".btn.check-out").click(function() {
  });
  $("form#custom-pizza").submit(function(event) {
  event.preventDefault();
  let size = $("select#size").val();
  let crust = $("select#crust").val();
  let flavour = $("select#flavour").val();
  let toppings = $("select#toppings").val();
  let pizzaDetails = (size + " - " + crust + " - " + toppings + "-" +flavour);
  let newPizzaOrder = new Order(size, crust, flavour,toppings);
  newPizzaOrder.pizzaCost();
  totalPriceArray.push(newPizzaOrder.pizzaPrice);
  $("#final-cost").text(newPizzaOrder.finalCost());
  $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
  });
  $("#submit-pizza").click(function() {
    $("#deliver").toggle();
  });

  $("#checkout-btn").click(function() {
    $("#order-details").toggle();
  });
  $("form#address-form").submit(function(event) {
    $(".address-form").toggle();
    event.preventDefault();
    let address = $("input#location").val();
    let newAddress = new Address(address);
    $("#delivery-option").text("Your pizza will be delivered to: " + newAddress.deliveryAddress);
  });
});
