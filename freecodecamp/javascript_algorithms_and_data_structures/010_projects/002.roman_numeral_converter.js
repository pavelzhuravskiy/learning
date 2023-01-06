function convertToRoman(num) {
  let romanArray = [];
  num = num.toString().split("");

  // Converting milleniums

  if (num.length >= 4) {
    let milleniums = parseInt(num.slice(0, num.length - 3).join(""));
    let milleniumCount = 0;
    while (milleniumCount < milleniums) {
      romanArray.push("M");
      milleniumCount++;
    }
  }

  // Converting centuries

  let century = parseInt(num[num.length - 3]);
  switch (century) {
    case 1:
      romanArray.push("C");
      break;
    case 2:
      romanArray.push("CC");
      break;
    case 3:
      romanArray.push("CCC");
      break;
    case 4:
      romanArray.push("CD");
      break;
    case 5:
      romanArray.push("D");
      break;
    case 6:
      romanArray.push("DC");
      break;
    case 7:
      romanArray.push("DCC");
      break;
    case 8:
      romanArray.push("DCCC");
      break;
    case 9:
      romanArray.push("CM");
      break;
  }

  // Converting decades

  let decade = parseInt(num[num.length - 2]);
  switch (decade) {
    case 1:
      romanArray.push("X");
      break;
    case 2:
      romanArray.push("XX");
      break;
    case 3:
      romanArray.push("XXX");
      break;
    case 4:
      romanArray.push("XL");
      break;
    case 5:
      romanArray.push("L");
      break;
    case 6:
      romanArray.push("LX");
      break;
    case 7:
      romanArray.push("LXX");
      break;
    case 8:
      romanArray.push("LXXX");
      break;
    case 9:
      romanArray.push("XC");
      break;
  }

  // Converting years

  let year = parseInt(num[num.length - 1]);
  switch (year) {
    case 1:
      romanArray.push("I");
      break;
    case 2:
      romanArray.push("II");
      break;
    case 3:
      romanArray.push("III");
      break;
    case 4:
      romanArray.push("IV");
      break;
    case 5:
      romanArray.push("V");
      break;
    case 6:
      romanArray.push("VI");
      break;
    case 7:
      romanArray.push("VII");
      break;
    case 8:
      romanArray.push("VIII");
      break;
    case 9:
      romanArray.push("IX");
      break;
  }

  return romanArray.join("");
}

console.log(convertToRoman(112));