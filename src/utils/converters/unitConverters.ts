import { ConverterFunction } from "@/types";

const KG_TO_POUND_FACTOR = 2.20462;
const CM_TO_INCH_FACTOR = 0.393701;

export const kilogramToPound: ConverterFunction = (kilogramInput) => {
  const kilograms = parseFloat(kilogramInput);
  if (isNaN(kilograms)) {
    throw new Error("Invalid input");
  }
  const pounds = kilograms * KG_TO_POUND_FACTOR;
  return pounds.toFixed(2);
};

export const centimeterToInch: ConverterFunction = (centimeterInput) => {
  const centimeters = parseFloat(centimeterInput);
  if (isNaN(centimeters)) {
    throw new Error("Invalid input");
  }
  const inches = centimeters * CM_TO_INCH_FACTOR;
  return inches.toFixed(2);
};
