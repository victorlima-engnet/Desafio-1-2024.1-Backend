function checkCashRegister(price, cash, cid) {
  const UNIT_AMOUNT = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let changeToGive = (cash - price) * 100;
  let totalCID = cid.reduce((acc, curr) => acc + curr[1] * 100, 0);

  if (totalCID === changeToGive) {
    return { status: "CLOSED", change: cid };
  }

  if (totalCID < changeToGive) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let changeArray = [];
  let reverseCID = [...cid].reverse(); 

  for (let [unit, amount] of reverseCID) {
    let unitValue = UNIT_AMOUNT[unit];
    let amountInStock = amount * 100;
    let amountToReturnFromUnit = 0;

    while (changeToGive >= unitValue && amountInStock > 0) {
      changeToGive -= unitValue;
      amountInStock -= unitValue;
      amountToReturnFromUnit += unitValue;
    }

    if (amountToReturnFromUnit > 0) {
      changeArray.push([unit, amountToReturnFromUnit / 100]);
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
}
