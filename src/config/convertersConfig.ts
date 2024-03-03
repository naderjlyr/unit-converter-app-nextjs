import { FC, SVGProps } from "react";
import { TbNumber } from "react-icons/tb";
import { HiCubeTransparent } from "react-icons/hi";

import {
  decimalToRomanSchema,
  binaryToRomanSchema,
} from "@/validations/numberConvertersSchema";
import { z } from "zod";
import { numberConverters } from "@/utils";

export type ConverterConfig = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  subCategories: {
    name: string;
    converterFunction: (input: string) => string;
    validationSchema: z.ZodSchema<any>;
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
      },
      {
        name: "Binary to Roman",
        converterFunction: numberConverters.binaryToRoman,
        validationSchema: binaryToRomanSchema,
      },
    ],
  },

  {
    name: "Units Converters",
    icon: HiCubeTransparent,
    subCategories: [
      {
        name: "KG-Pound",
        converterFunction: numberConverters.decimalToRoman,
        validationSchema: decimalToRomanSchema,
      },
      {
        name: "Cm-Meter",
        converterFunction: numberConverters.binaryToRoman,
        validationSchema: binaryToRomanSchema,
      },
    ],
  },
];
