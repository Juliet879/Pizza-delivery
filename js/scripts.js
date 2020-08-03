var price , crust_price , topping_price;
let total = 0;
function Getpizza (flavor,size,crust,topping,total){
    this.flavor = name;
    this.size = size;
    this.crust = topping;
    this.total = total;
}

// order button
$("button.order").click(function(event){
    let pflavor = $("#flavor option:selected").val();
    let psize = $("#size option:selected").val();
    let pcrust = $("#crust option:selected").val();
    let ptopping = [];
    $.each($("input[name= 'toppings']:checked"), function(){
        ptopping.push($this).val());
    });
    console.log(ptopping.join(","));

    switch(psize){
        case "0": price =0;
        break;
        case "large": price =1850;
          console.log(price);
        break;
        case "medium": price =1100;
          console.log("The price is " + price);
        break;
        case "small": price =700;
          console.log(price)
        break;
        default:
          console.log("error")
    }
    switch(pcrust){
        case "0": price =0;
        break;
        case "cheese-stuffed": price =200;
          console.log(price);
        break;
        case "Sicillian": price =150;
          console.log("The price is " + price);
        break;
        case "neapolitan": price =100;
          console.log(price)
        break;
        default:
          console.log("No price")
    }
    let topping_value =ptopping.length*50;
    console.log("toppings value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selcted");
      $("button.order").show();
      $("#order-note").show();
      $("div.choise").hide();
        alert("Please select pizza side and crust");
    }
    else{
      $("button.order").hide();
      $("#order-note").hide();
      $("div.choise").slideDown(1200)
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaflavor").html($("#flavor option:selected").val());  
    $("#pizzasize").html($("#flavor option:selected").val());    
    $("#pizzacrust").html($("#flavor option:selected").val());  
    $("#pizzatopping").html(ptopping.join(",")) ;   
    $"#totals".html(total)

    // add pizza button
    $("button.addPizza").click(function(){
      let pflavor = $("#flavor option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name= 'toppings']:checked"), function(){
          ptopping.push($this).val());
      });
      console.log(ptopping.join(","));


      switch(psize){
        case "0": price =0;
        break;
        case "large": price =1850;
          console.log(price);
        break;
        case "medium": price =1100;
          console.log("The price is " + price);
        break;
        case "small": price =700;
          console.log(price)
        break;
        default:
          console.log("error")
    }
    switch(pcrust){
        case "0": price =0;
        break;
        case "cheese-stuffed": price =200;
          console.log(price);
        break;
        case "Sicillian": price =150;
          console.log("The price is " + price);
        break;
        case "neapolitan": price =100;
          console.log(price)
        break;
        default:
          console.log("No price")
    }
    let topping_value = ptopping.length*50;
    console.log("topping value" + topping_value);
    total = price + crust_price + topping_value
    console.log(total);

    checkoutTotal = checkoutTotal + total;
    console.log("checkoutTotal");
    // constractor function
    $("#ordersmade").append('<tr><td id="pizzaflavor">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
    console.log(newOrder);

  });
  // Checkout button
   $("button#checkout").click(function(){
     $("button#checkout").hide();
     $("button.addPizza").hide();
     $("button.deliver").slideDown(1000);
     console.log("Your total bills is Sh. " + checkoutTotal);
     $("pizzatotal").append("You bill is sh. "+ checkoutTotal)
   });


  //  home delivery button
  $("button.delivery").click(function(){
    $(".pizzatable").hide();
    $(".choise h2").hide();
    $(".delivery").slideDown(1000);
    $("#addedprice").hide();
    $("button.deliver").hide();
    $("#pizzatotal").hide();
  })
    