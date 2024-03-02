const decimalToRomanConverter: ConverterFunction = (decimalInput) => {
  if (!decimalInput.match(/^\d+$/)) {
    throw new Error("Invalid input: Input must be a non-negative integer.");
  }

  let remainingDecimal = parseInt(decimalInput, 10);
  if (remainingDecimal <= 0 || remainingDecimal > 3999) {
    throw new Error("Invalid input: Decimal value must be between 1 and 3999.");
  }

  const decimalToRomanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  return decimalToRomanMap.reduce(
    (romanNumeral, [decimalValue, romanSymbol]) => {
      while (remainingDecimal >= decimalValue) {
        romanNumeral += romanSymbol;
        remainingDecimal -= decimalValue;
      }
      return romanNumeral;
    },
    ""
  );
};

const binaryToRomanConverter: ConverterFunction = (binaryInput) => {
  if (!binaryInput.match(/^[01]+$/)) {
    throw new Error("Invalid input: Input must be a binary number.");
  }

  const decimalNumber = parseInt(binaryInput, 2);
  if (isNaN(decimalNumber) || decimalNumber <= 0) {
    throw new Error(
      "Invalid input: Binary conversion resulted in an out of range or non-numeric value."
    );
  }

  return decimalToRomanConverter(decimalNumber.toString());
};

export const converterFunctions = {
  decimalToRoman: decimalToRomanConverter,
  binaryToRoman: binaryToRomanConverter,
};

export type ConverterFunction = (input: string) => string;

export type ConverterType = keyof typeof converterFunctions;

export { decimalToRomanConverter, binaryToRomanConverter };