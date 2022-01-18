var initalPrice = document.querySelector("#initial-price");
var stocksNumber = document.querySelector("#number-stocks");
var currentPrice = document.querySelector("#current-price");
var button = document.querySelector("#cta");
var output = document.querySelector("#output");

// Functions

function check(profit, percentage){
    if(profit > 1){
        return "Yayy! your profit is   $" + profit + " and profit percentage is %" + percentage + " :)";
    }
    else if (profit < 0) {
        return "Whoops!! Your loss is  $" + profit + " and loss percentage is %" + percentage + " :(" ;
    }
    else if (profit == 0){
        return "I dont what to say, your net worth is the same as before. Blessing in disguise?"
    }
    else {
        return "Something went wrong"
    }
}

function calculateProfit(){
   var initalPriceA = Number(initalPrice.value);
   var stocksNumberA = Number(stocksNumber.value);
   var currentPriceA = Number(currentPrice.value);

   let absoluteProfit = (currentPriceA * stocksNumberA) - (initalPriceA * stocksNumberA);

   let percentageProfit = (absoluteProfit/initalPriceA) * 100;
   

   var message = check(absoluteProfit, percentageProfit);

    return message;

}






function eventHandler(){
    var final_output = calculateProfit();
    output.innerHTML = final_output;
}




// Event Listeners
button.addEventListener("click", eventHandler);