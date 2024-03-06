import { ConverterFunction } from "@/types";

export const decimalToRoman: ConverterFunction = (decimalInput) => {
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

export const binaryToRoman: ConverterFunction = (binaryInput) => {
  const decimalNumber = parseInt(binaryInput, 2);
  return decimalToRoman(decimalNumber.toString());
};
