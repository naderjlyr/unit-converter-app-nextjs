import { FC, SVGProps } from "react";
import { TbDecimal, TbNumber, TbRulerMeasure } from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi";

import {
  decimalToRomanSchema,
  binaryToRomanSchema,
} from "@/validations/numberConvertersSchema";
import {
  centimeterToInchSchema,
  kilogramToPoundSchema,
} from "@/validations/unitConvertersSchema";
import { LuBinary } from "react-icons/lu";
import { GiWeight } from "react-icons/gi";
import { ConverterSubCategory } from "@/types";

export type ConverterConfig = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  subCategories: ConverterSubCategory[];
};
export const converterEndpoints = {
  decimalToRoman: "decimal-roman",
  binaryToRoman: "binary-roman",
  kilogramToPound: "kg-pound",
  centimeterToInch: "cm-inch",
};
export const converterCategories: ConverterConfig[] = [
  {
    name: "Number Converters",
    icon: TbNumber,
    subCategories: [
      {
        name: "Decimal to Roman",
        validationSchema: decimalToRomanSchema,
        icon: TbDecimal,
        endpoint: "decimal-roman",
      },
      {
        name: "Binary to Roman",
        validationSchema: binaryToRomanSchema,
        icon: LuBinary,
        endpoint: "binary-roman",
      },
    ],
  },

  {
    name: "Unit Converters",
    icon: HiCubeTransparent,
    subCategories: [
      {
        name: "Kilogram to Pound",
        validationSchema: kilogramToPoundSchema,
        icon: GiWeight,
        endpoint: "kg-pound",
      },
      {
        name: "Centimeter to Inch",
        validationSchema: centimeterToInchSchema,
        icon: TbRulerMeasure,
        endpoint: "cm-inch",
      },
    ],
  },
];
