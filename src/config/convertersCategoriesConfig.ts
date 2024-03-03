import {
  ConverterFunction,
  converterFunctions,
} from "@/utils/numberConverters";
import { FC, SVGProps } from "react";
import { FaCube } from "react-icons/fa";
import { HiCubeTransparent } from "react-icons/hi";
import { TbNumber } from "react-icons/tb";

export type ConverterSubCategory = {
  name: string;
  converterFunction: ConverterFunction;
};

export type ConverterCategory = {
  name: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  subCategories: ConverterSubCategory[];
};

export const converterCategories: ConverterCategory[] = [
  {
    name: "Number Converters",
    icon: TbNumber,
    subCategories: [
      {
        name: "Decimal to Roman",
        converterFunction: converterFunctions.decimalToRoman,
      },
      {
        name: "Binary to Roman",
        converterFunction: converterFunctions.binaryToRoman,
      },
    ],
  },
  {
    name: "Units Converters",
    icon: HiCubeTransparent,
    subCategories: [
      {
        name: "KG-POUND",
        converterFunction: converterFunctions.decimalToRoman,
      },
      {
        name: "CM-METER",
        converterFunction: converterFunctions.binaryToRoman,
      },
    ],
  },
];
