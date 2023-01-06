function checkCashRegister(price, cash, cid) {
  // Calculating change
  let change = cash - price;
  const backArr = [change];

  // Mapping array to determine available amounts, banknotes and coins
  let changeArr = cid
    .map((amount) => {
      switch (amount[0]) {
        case "ONE HUNDRED":
          amount = [amount[0], 100, Math.round(cid[8][1] / 100)];
          break;
        case "TWENTY":
          amount = [amount[0], 20, Math.round(cid[7][1] / 20)];
          break;
        case "TEN":
          amount = [amount[0], 10, Math.round(cid[6][1] / 10)];
          break;
        case "FIVE":
          amount = [amount[0], 5, Math.round(cid[5][1] / 5)];
          break;
        case "ONE":
          amount = [amount[0], 1, Math.round(cid[4][1] / 1)];
          break;
        case "QUARTER":
          amount = [amount[0], 0.25, Math.round(cid[3][1] / 0.25)];
          break;
        case "DIME":
          amount = [amount[0], 0.1, Math.round(cid[2][1] / 0.1)];
          break;
        case "NICKEL":
          amount = [amount[0], 0.05, Math.round(cid[1][1] / 0.05)];
          break;
        case "PENNY":
          amount = [amount[0], 0.01, Math.round(cid[0][1] / 0.01)];
          break;
      }
      return amount;
    })
    .filter((amount) => amount[1] <= change)
    .reverse();

  // Calculating amount of banknotes and coins we need to give
  changeArr = changeArr
    .map((elem) => {
      let amounts = 0;
      while (amounts < elem[2] && change - elem[1] >= 0) {
        amounts++;
        change = Number((change - elem[1]).toFixed(2));
      }
      elem[2] = amounts;
      elem[1] = Number((elem[1] * elem[2]).toFixed(2));
      elem.pop();
      return elem;
    })
    .filter((elem) => elem[1] !== 0 && elem[1] >= change);

  // Determining default drawer status
  const changeObj = {
    status: "OPEN",
    change: changeArr,
  };

  // Calculating total amount of cash in drawer
  let totalChange = Number(
    cid
      .flat()
      .filter((elem) => typeof elem === "number")
      .reduce((a, b) => a + b, 0)
      .toFixed(2)
  );

  if (totalChange === backArr[0]) {
    changeObj.status = "CLOSED";
    changeObj.change = cid;
    return changeObj;
  } else if (changeArr.length === 0) {
    changeObj.status = "INSUFFICIENT_FUNDS";
    changeObj.change = [];
    return changeObj;
  } else {
    return changeObj;
  }
}

let x = [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
];

console.log(checkCashRegister(19.5, 20, x));