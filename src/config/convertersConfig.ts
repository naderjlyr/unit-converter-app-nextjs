import { FC, SVGProps } from "react";
import { TbDecimal, TbNumber, TbRulerMeasure } from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi";

import {
  decimalToRomanSchema,
  binaryToRomanSchema,
} from "@/validations/numberConvertersSchema";
import { z } from "zod";
import { numberConverters, unitConverters } from "@/utils";
import {
  centimeterToInchSchema,
  kilogramToPoundSchema,
} from "@/validations/unitConvertersSchema";
import { LuBinary } from "react-icons/lu";
import { GiWeight } from "react-icons/gi";

export type ConverterConfig = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  subCategories: {
    name: string;
    converterFunction: (input: string) => string;
    validationSchema: z.ZodSchema<any>;
    icon: FC<SVGProps<SVGSVGElement>>;
  }[];
};

export const converterCategories: ConverterConfig[] = [
  {
    name: "Number Converters",
    icon: TbNumber,
    subCategories: [
      {
        name: "Decimal to Roman",
        converterFunction: numberConverters.decimalToRoman,
        validationSchema: decimalToRomanSchema,
        icon: TbDecimal,
      },
      {
        name: "Binary to Roman",
        converterFunction: numberConverters.binaryToRoman,
        validationSchema: binaryToRomanSchema,
        icon: LuBinary,
      },
    ],
  },

  {
    name: "Unit Converters",
    icon: HiCubeTransparent,
    subCategories: [
      {
        name: "Kilogram to Pound",
        converterFunction: unitConverters.kilogramToPound,
        validationSchema: kilogramToPoundSchema,
        icon: GiWeight,
      },
      {
        name: "Centimeter to Inch",
        converterFunction: unitConverters.centimeterToInch,
        validationSchema: centimeterToInchSchema,
        icon: TbRulerMeasure,
      },
    ],
  },
];
