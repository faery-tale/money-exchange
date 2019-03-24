// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var result = {};
    var moneyArray = [['H', 'Q', 'D', 'N', 'P'],[50,25,10,5,1]];
    if (currency>10000){
        result['error'] = "You are rich, my friend! We don't have so much coins for exchange";
        return result;
    }
    for(var i = 0; i<moneyArray[1].length; i++){
        if(currency/moneyArray[1][i] >= 1){
            result[moneyArray[0][i]] = Math.floor(currency/moneyArray[1][i]);
            currency = currency%moneyArray[1][i];
        }
    }
    return result;
}
