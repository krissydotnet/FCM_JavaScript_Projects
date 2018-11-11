function checkCashRegister(price, cash, cid) {
    var expectedChange = Math.round((cash * 100) - (price * 100));

    var cidObj = cid.map(function(x) {
        return {
            currency: x[0],
            currencyValue: getCurrencyValue(x[0]),
            total: Math.round(x[1] * 100)
        }
    }).reverse();

    var remainder = expectedChange;
    var changeArray = [];
     for (let i = 0; i < cidObj.length; i++) {
        var tmpCurrencyTotal = 0;
         if (cidObj[i].currencyValue <= remainder && cidObj[i].total > 0){
             
             while (remainder >= cidObj[i].currencyValue && cidObj[i].total > 0) {
                
                remainder -= cidObj[i].currencyValue;
                cidObj[i].total -=  cidObj[i].currencyValue;
                tmpCurrencyTotal += cidObj[i].currencyValue;
             }
             
         }
         changeArray.push([cidObj[i].currency, tmpCurrencyTotal]);
     }
    
     let totalLeft = cidObj.map(function(x) {
        return x.total;
    }).reduce(function (sum, value) {
        return sum + value;
    } ); 

    var changeObj = {status: "", change: []};
    if (remainder > 0) {
        changeObj.status = "INSUFFICIENT_FUNDS";
    } else if ( totalLeft === 0) {
        changeObj.status = "CLOSED";
        changeObj.change = changeArray.map(function (x) {
            return [x[0], x[1]/100]}).reverse();
    }
    else {
        changeObj.status = "OPEN";
        changeObj.change = changeArray.map(function (x) {
            return [x[0], x[1]/100]}).filter(function (x) {
                return x[1] > 0
            });
    }
    
    // Here is your change, ma'am.

    return changeObj;
  }

  function getCurrencyValue(currency) {
      switch (currency) {
          case "ONE HUNDRED": return 10000;
          case "TWENTY": return 2000;
          case "TEN": return 1000;
          case "FIVE": return 500;
          case "ONE": return 100;
          case "QUARTER": return 25;
          case "DIME": return 10;
          case "NICKEL": return 5;
          case "PENNY": return 1;
          default: return 0;
      }
  }

  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
   console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));