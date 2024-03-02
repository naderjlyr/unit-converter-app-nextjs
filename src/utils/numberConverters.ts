const decimalToRomanConverter: ConverterFunction = (decimalInput) => {
  let remainingDecimal = parseInt(decimalInput, 10);
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
  const decimalNumber = parseInt(binaryInput, 2);
  return decimalToRomanConverter(decimalNumber.toString());
};

export const converterFunctions = {
  decimalToRoman: decimalToRomanConverter,
  binaryToRoman: binaryToRomanConverter,
};

export type ConverterFunction = (input: string) => string;

export type ConverterType = keyof typeof converterFunctions;

export { decimalToRomanConverter, binaryToRomanConverter };
