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

    switch(psize{
        case "0"
    })
})