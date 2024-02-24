var romanToInt = function (s) {
  let num = 0;

  let splitString = s.split("");

  for (let i = 0; i < splitString.length; i++) {
    const digit = splitString[i];

    const nextDigit = splitString[i + 1];

    if (digit === "I") {
      // if next === v an next === x
      if (nextDigit === "V" || nextDigit === "X") {
        num -= 1;
      } else {
        num += 1;
      }
    }

    if (digit === "V") {
      num += 5;
    }

    if (digit === "X") {
      if (nextDigit === "L" || nextDigit === "C") {
        num -= 10;
      } else {
        num += 10;
      }
    }

    if (digit === "L") {
      num += 50;
    }
    if (digit === "C") {
      if (nextDigit === "D" || nextDigit === "M") {
        num -= 100;
      } else {
        num += 100;
      }
    }
    if (digit === "D") {
      num += 500;
    }
    if (digit === "M") {
      num += 1000;
    }
  }

  return num;
};

console.log(romanToInt("MCMXCIV"));
// IV
// digit = I  nextDigit = V
// num + 1

// VI
//
